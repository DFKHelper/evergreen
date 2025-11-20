#!/usr/bin/env python3
"""
Extract content from Squarespace HTML backup files
"""
import re
import json
from pathlib import Path
from html.parser import HTMLParser

class SquarespaceContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.content_blocks = []
        self.current_block = {}
        self.in_title = False
        self.in_subtitle = False
        self.in_content = False
        self.current_tag_stack = []

    def handle_starttag(self, tag, attrs):
        self.current_tag_stack.append(tag)
        attrs_dict = dict(attrs)

        # Check for image titles
        if 'class' in attrs_dict and 'image-title' in attrs_dict['class']:
            self.in_title = True
            self.current_block['title'] = ''

        # Check for image subtitles
        if 'class' in attrs_dict and 'image-subtitle' in attrs_dict['class']:
            self.in_subtitle = True
            self.current_block['subtitle'] = ''

        # Check for text blocks
        if 'class' in attrs_dict and 'sqs-html-content' in attrs_dict['class']:
            self.in_content = True
            self.current_block['content'] = ''

    def handle_endtag(self, tag):
        if self.current_tag_stack:
            self.current_tag_stack.pop()

        # When we finish a title div
        if tag == 'div' and self.in_title:
            self.in_title = False

        # When we finish a subtitle div
        if tag == 'div' and self.in_subtitle:
            self.in_subtitle = False
            if self.current_block:
                self.content_blocks.append(self.current_block.copy())
                self.current_block = {}

        # When we finish a content div
        if tag == 'div' and self.in_content:
            self.in_content = False
            if self.current_block:
                self.content_blocks.append(self.current_block.copy())
                self.current_block = {}

    def handle_data(self, data):
        text = data.strip()
        if not text:
            return

        if self.in_title:
            self.current_block['title'] = self.current_block.get('title', '') + text
        elif self.in_subtitle:
            self.current_block['subtitle'] = self.current_block.get('subtitle', '') + text
        elif self.in_content:
            self.current_block['content'] = self.current_block.get('content', '') + text + '\n'

def extract_page_content(html_file):
    """Extract content from a single HTML file"""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            html = f.read()

        parser = SquarespaceContentExtractor()
        parser.feed(html)

        return {
            'file': html_file.name,
            'blocks': parser.content_blocks
        }
    except Exception as e:
        return {
            'file': html_file.name,
            'error': str(e)
        }

def main():
    backup_dir = Path('/mnt/c/Projects/Evergreen/backup/full-site/www.evergreenchironash.com')

    pages = [
        'about.html',
        'conditions.html',
        'faq.html',
        'contact.html',
        'new-patient.html',
        'cft-gillespie.html',
        'visceral-therapy.html',
        'embodiedbreastfeeding.html'
    ]

    all_content = {}

    for page in pages:
        page_path = backup_dir / page
        if page_path.exists():
            print(f"Extracting content from {page}...")
            content = extract_page_content(page_path)
            all_content[page] = content
        else:
            print(f"Warning: {page} not found")

    # Save extracted content
    output_file = Path('/mnt/c/Projects/Evergreen/extracted_pages_content.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_content, f, indent=2, ensure_ascii=False)

    print(f"\nContent extracted to {output_file}")

    # Also create a readable markdown summary
    md_output = Path('/mnt/c/Projects/Evergreen/PAGES_CONTENT.md')
    with open(md_output, 'w', encoding='utf-8') as f:
        f.write("# Extracted Page Content\n\n")

        for page_name, page_data in all_content.items():
            f.write(f"## {page_name}\n\n")

            if 'error' in page_data:
                f.write(f"Error: {page_data['error']}\n\n")
                continue

            for idx, block in enumerate(page_data.get('blocks', []), 1):
                if 'title' in block:
                    f.write(f"### {block['title']}\n\n")
                if 'subtitle' in block:
                    f.write(f"{block['subtitle']}\n\n")
                if 'content' in block:
                    f.write(f"{block['content']}\n\n")
                f.write("---\n\n")

    print(f"Readable content saved to {md_output}")

if __name__ == '__main__':
    main()
