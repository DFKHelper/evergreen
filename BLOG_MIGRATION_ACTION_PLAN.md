# BLOG MIGRATION ACTION PLAN
## Evergreen Chiropractic - Get Blog Live ASAP

**Goal:** Migrate 9 blog posts from Squarespace backup to Sanity CMS
**Priority:** CRITICAL - Blog currently shows "Coming Soon"
**Estimated Time:** 4-6 hours (manual) OR 2-3 hours (automated)

---

## BLOG POSTS TO MIGRATE

### 1. The 4 Pillars of Health: Live a Happy Drug & Pain Free Life
- **Date:** December 6, 2020
- **Category:** Healthy Hormones / Wellness
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2020/12/6/the-4-pillars-of-health-live-a-happy-drug-amp-pain-free-life.html`

### 2. What Should I Do Between Adjustments
- **Date:** December 25, 2021
- **Category:** Chiropractic
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2021/12/25/what-should-i-do-between-adjustments.html`

### 3. Why PMS May Be Worse After the Holidays
- **Date:** December 25, 2021
- **Category:** Healthy Hormones
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2021/12/25/why-pms-may-be-worse-after-the-holidays.html`

### 4. What Makes Gonstead Chiropractic Different
- **Date:** May 27, 2022
- **Category:** Chiropractic
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2022/5/27/what-makes-gonstead-chiropractic-different.html`

### 5. 5 Misconceptions About Chiropractic
- **Date:** August 13, 2022
- **Category:** Chiropractic
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2022/8/13/5-misconceptions-about-chiropracticnbsp.html`

### 6. Seeing a Chiropractor: One Time Visit vs Long-Term Care
- **Date:** August 23, 2024
- **Category:** Chiropractic
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2024/8/23/seeing-a-chiropractor-one-time-visit-vs-long-term-carenbsp.html`

### 7. Can Your Shoes Be Impacting Your Spine
- **Date:** August 23, 2024
- **Category:** Chiropractic
- **Tags:** barefoot shoes, wellness
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2024/8/23/can-your-shoes-be-impacting-your-spine.html`

### 8. How Chiropractic Adjustments Improve Digestion Issues
- **Date:** August 23, 2024
- **Category:** Chiropractic
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2024/8/23/how-chiropractic-adjustments-improve-digestion-issues.html`

### 9. How a Chiropractic Visit Can Relieve Neck Pain
- **Date:** August 23, 2024
- **Category:** Chiropractic
- **Tags:** neck pain, back pain
- **File:** `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2024/8/23/how-a-chiropractic-visit-can-relieve-neck-pain.html`

---

## MIGRATION OPTIONS

### OPTION A: Manual Entry via Sanity Studio (RECOMMENDED FOR QUALITY)

**Time:** 4-6 hours
**Pros:** Full control, clean content, review each post
**Cons:** Time-consuming

**Steps:**
1. Open Sanity Studio: http://localhost:3001/studio
2. For each blog post:
   - Click "Blog Post" → "Create New"
   - Copy title from HTML file
   - Set published date
   - Select category (Chiropractic or Healthy Hormones)
   - Copy body content (clean up HTML)
   - Add excerpt (first 2-3 sentences)
   - Select author (Dr. Brittney McGetrick)
   - Upload featured image from `/public/images/`
   - Generate slug from title
   - Publish

### OPTION B: Automated Script (FASTER BUT NEEDS CLEANUP)

**Time:** 2-3 hours (1 hour script + 1-2 hours cleanup)
**Pros:** Fast bulk import
**Cons:** May need content cleanup, HTML parsing issues

**Steps:**

#### 1. Install Dependencies
```bash
cd /mnt/c/Projects/Evergreen/evergreen-nextjs
npm install cheerio @sanity/client
```

#### 2. Create Blog Extraction Script
Create `/mnt/c/Projects/Evergreen/evergreen-nextjs/scripts/extract-blog-posts.ts`:

```typescript
import * as cheerio from 'cheerio'
import * as fs from 'fs'
import * as path from 'path'

const blogPosts = [
  {
    file: '/mnt/c/Projects/Evergreen/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2020/12/6/the-4-pillars-of-health-live-a-happy-drug-amp-pain-free-life.html',
    date: '2020-12-06',
    category: 'Healthy Hormones'
  },
  // ... add all 9 posts
]

blogPosts.forEach(post => {
  const html = fs.readFileSync(post.file, 'utf-8')
  const $ = cheerio.load(html)

  const title = $('h1.BlogItem-title').text().trim()
  const body = $('.BlogItem-body').html()
  const excerpt = $('.BlogItem-excerpt').text().trim()

  console.log({
    title,
    publishedAt: post.date,
    category: post.category,
    body,
    excerpt
  })
})
```

#### 3. Create Sanity Import Script
Create `/mnt/c/Projects/Evergreen/evergreen-nextjs/scripts/import-blog-posts.ts`:

```typescript
import { createClient } from '@sanity/client'
import extractedPosts from './extracted-blog-posts.json'

const client = createClient({
  projectId: 'ekj1nrtx',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01'
})

async function importBlogPosts() {
  for (const post of extractedPosts) {
    await client.create({
      _type: 'blogPost',
      title: post.title,
      slug: { current: post.slug },
      publishedAt: post.date,
      excerpt: post.excerpt,
      body: convertHtmlToPortableText(post.body),
      // Add category, author references
    })
  }
}
```

---

## QUICK START GUIDE

### For Manual Entry (Recommended):

1. **Start Sanity Studio:**
   ```bash
   cd /mnt/c/Projects/Evergreen/evergreen-nextjs
   npm run dev
   ```
   Open: http://localhost:3001/studio

2. **Create Categories First:**
   - Blog Post → Category → Create "Chiropractic"
   - Blog Post → Category → Create "Healthy Hormones"

3. **Create Authors:**
   - Blog Post → Author → Create "Dr. Brittney McGetrick"
   - Add bio, title, image

4. **Create First Blog Post:**
   - Open HTML file in browser: `/backup/full-site/www.evergreenchironash.com/evergreenwellnessblog/2020/12/6/the-4-pillars-of-health-live-a-happy-drug-amp-pain-free-life.html`
   - Copy title: "The 4 Pillars of Health: Live a Happy Drug & Pain Free Life"
   - Copy body content (remove Squarespace cruft)
   - In Sanity Studio:
     - Title: paste
     - Slug: auto-generate from title
     - Published At: 2020-12-06
     - Category: Healthy Hormones
     - Author: Dr. Brittney McGetrick
     - Body: paste and format
     - Excerpt: First paragraph
   - Publish!

5. **Verify:**
   - Go to http://localhost:3001/blog
   - Should see blog post appear
   - Click to view full post

6. **Repeat for remaining 8 posts**

---

## CONTENT EXTRACTION TIPS

### From HTML Files:

**Title:**
Look for: `<h1 class="BlogItem-title">` or `<title>` tag

**Body:**
Look for: `<div class="BlogItem-body">` or main content area

**Date:**
Already documented in file path and action plan

**Images:**
Look for: `<img>` tags in blog body
Find matching images in `/public/images/`

**Excerpt:**
Use first 2-3 sentences of body content

### Cleaning Content:

Remove:
- Squarespace class names
- Navigation elements
- Footer content
- Social sharing buttons
- "Back to Blog" links

Keep:
- Headings (H2, H3)
- Paragraphs
- Lists (ul, ol)
- Images (note src for Sanity upload)
- Links (update to relative paths)

---

## SANITY PORTABLE TEXT FORMAT

When pasting blog content, Sanity expects Portable Text format.

**Simple conversion:**
```
HTML Heading → Block with style: h2
HTML Paragraph → Block with style: normal
HTML List → Block with listItem
HTML Image → Image block (upload separately)
```

**In Sanity Studio UI:**
- Use toolbar to format text
- Paste plain text, then apply formatting
- Upload images via image button
- Add links via link button

---

## POST-MIGRATION CHECKLIST

After migrating all 9 blog posts:

- [ ] All 9 posts visible at http://localhost:3001/blog
- [ ] Each post has:
  - [ ] Title
  - [ ] Slug (URL-friendly)
  - [ ] Published date
  - [ ] Category
  - [ ] Author (Dr. Brittney McGetrick)
  - [ ] Excerpt
  - [ ] Body content (formatted)
  - [ ] Featured image (if available)
- [ ] Posts display correctly on blog listing page
- [ ] Individual post pages work: `/blog/[slug]`
- [ ] Categories filter works
- [ ] No "Coming Soon" message
- [ ] SEO metadata present on each post

---

## TROUBLESHOOTING

### Issue: Sanity Studio won't load
**Solution:**
```bash
cd /mnt/c/Projects/Evergreen/evergreen-nextjs
npm install
npm run dev
```

### Issue: Can't create blog posts
**Solution:** Need Sanity API token in `.env.local`
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="ekj1nrtx"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-token-here"
```

### Issue: Images not showing
**Solution:**
1. Upload images to Sanity via Studio
2. Or reference images in `/public/images/`
3. Use Next.js Image component with proper path

### Issue: Blog posts not appearing on site
**Solution:**
1. Check Sanity Studio - are posts published?
2. Check `lib/sanity/queries.ts` - is query correct?
3. Restart dev server: `npm run dev`

---

## ESTIMATED TIME BREAKDOWN

### Manual Entry (4-6 hours):
- Category setup: 15 min
- Author setup: 15 min
- First blog post (learning): 45 min
- Posts 2-9 (faster): 30 min each = 4 hours
- Review and cleanup: 30 min
- **Total: 5-6 hours**

### Automated (2-3 hours):
- Script development: 1 hour
- Content extraction: 30 min
- Import to Sanity: 30 min
- Review and cleanup: 1-2 hours
- **Total: 3-4 hours**

---

## NEXT STEPS AFTER BLOG MIGRATION

Once blog is live:

1. **Add nature backgrounds to remaining pages** (2-3 hours)
   - About page
   - Services page
   - Contact page
   - FAQ page

2. **Create additional pages** (3-5 hours)
   - New Patient
   - CFT Gillespie
   - Visceral Therapy
   - Embodied Breastfeeding

3. **Deploy to production** (1-2 hours)
   - Push to GitHub
   - Deploy to Vercel
   - Configure DNS

---

**Priority:** START WITH BLOG MIGRATION TODAY
**Goal:** Get blog live this week
**Outcome:** Users can read valuable chiropractic content, site feels complete

---

*Ready to get started? Open Sanity Studio and create your first blog post!*
