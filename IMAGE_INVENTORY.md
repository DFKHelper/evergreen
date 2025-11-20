# Image Inventory - Evergreen Chiropractic

## ✅ Images Migrated from Squarespace

### Total Images: 54 images copied from Squarespace backup

All images are now available in `/public/images/` directory.

---

## 🖼️ Key Images Added to Website

### Logo
- **File**: `/public/logo.jpg`
- **Original**: `Untitled_Artwork+11.jpg`
- **Used in**: Navigation component
- **Dimensions**: 263KB, optimized for web

### Team Photos
1. **Dr. Brittney McGetrick**
   - **File**: `/public/team-1.png`
   - **Original**: `Meet+Our+Doctors+(3).png`
   - **Used in**: About page

2. **Dr. Toya White**
   - **File**: `/public/team-2.png`
   - **Original**: `Meet+Our+Doctors+(1).png`
   - **Used in**: About page

3. **Dr. Courtney Simon**
   - **File**: `/public/team-3.png`
   - **Original**: `Meet+Our+Doctors+(2).png`
   - **Used in**: About page

### Office Photos
1. **Office Interior 1**
   - **File**: `/public/office-1.jpg`
   - **Original**: `IMG_9806.jpg`
   - **Used in**: Services page (Pregnant Moms section)
   - **Size**: 104KB

2. **Office Interior 2**
   - **File**: `/public/office-2.jpg`
   - **Original**: `IMG_0084.jpg`
   - **Used in**: Available for use
   - **Size**: 368KB

3. **Office Interior 3**
   - **File**: `/public/office-3.jpg`
   - **Original**: `IMG_5218.jpg`
   - **Used in**: Services page (Kids section)
   - **Size**: 52KB

### Nature/Tree Images (Brand Theme)
1. **Nature Background 1**
   - **File**: `/public/nature-1.png`
   - **Original**: `2.png`
   - **Used in**: Available for backgrounds
   - **Size**: 1.8MB

2. **Nature Background 2**
   - **File**: `/public/nature-2.jpg`
   - **Original**: `IMG_0851.jpg`
   - **Used in**: Homepage hero background
   - **Size**: 1.5MB

3. **Nature Background 3**
   - **File**: `/public/nature-3.jpg`
   - **Original**: `IMG_6289.jpg`
   - **Used in**: Available for backgrounds
   - **Size**: 131KB

4. **Nature Background 4**
   - **File**: `/public/nature-4.png`
   - **Original**: `3.png`
   - **Used in**: Available for backgrounds
   - **Size**: 2.6MB

---

## 📁 All Available Images

All 54 images from your Squarespace site are available in:
```
/public/images/
```

### Image Categories Found:

1. **Team & Staff Photos**
   - Meet Our Doctors (3 variations)
   - Individual staff photos

2. **Office Photos**
   - Interior shots
   - Treatment rooms
   - Facility images

3. **Blog Post Images**
   - Featured images for blog posts
   - Health & wellness graphics
   - Educational diagrams

4. **Service Images**
   - Chiropractic techniques
   - Treatment illustrations
   - CFT therapy images

5. **Branding**
   - Logo variations
   - Brand graphics

---

## 🎨 Image Formats Available

Each image has multiple optimized sizes:
- Original size
- 100w, 300w, 500w, 750w, 1000w, 1500w, 2500w
- Squarespace provided responsive image optimization

---

## 📝 How to Use Images in Your Site

### In React Components:

```tsx
import Image from 'next/image'

<Image
  src="/logo.jpg"
  alt="Evergreen Chiropractic Logo"
  width={200}
  height={200}
/>
```

### In Markdown/HTML:

```html
<img src="/images/your-image.jpg" alt="Description" />
```

### With Next.js Image Optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/folder-id/image-name.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

---

## 🔍 Finding Specific Images

All images are organized by their Squarespace ID folders:

```
/public/images/
├── 02a21481-8ab9-4364-a9c6-d901d650b557/  (Team photo 1)
├── 058ba32a-c7d7-434d-a2d2-3263af48d436/  (Team photo 2)
├── c5243638-9e18-44c4-a97a-c59a7d4eef83/  (Team photo 3)
├── 1550275402514-EDDFOWNT1YZ5SP83B7CP/  (Logo)
└── [48 other image folders]
```

To find a specific image:
```bash
find /public/images -name "*keyword*"
```

---

## ✨ Images Currently Used on Website

1. **Navigation**: Logo (`/logo.jpg`)
2. **About Page**: 3 team photos (`/team-1.png`, `/team-2.png`, `/team-3.png`)
3. **Homepage**: Using placeholder icons (can be replaced with actual images)
4. **Blog Posts**: Available in `/public/images/` but not yet integrated

---

## 📋 Next Steps for Images

### To Add More Images:

1. **Blog Post Featured Images**
   - Each blog post can have a featured image
   - Images are available in `/public/images/`
   - Add `featuredImage` field to blog posts in Sanity

2. **Service Page Images**
   - Add service-specific images
   - CFT therapy demonstration images
   - Gonstead technique illustrations

3. **Homepage Hero Image**
   - Consider adding a hero background image
   - Or office/team photo in hero section

4. **Testimonial Photos**
   - If you have patient testimonials with photos

5. **Gallery**
   - Create a photo gallery page
   - Showcase office, team, and services

---

## 🚀 Image Optimization

Next.js automatically optimizes all images using the `<Image>` component:
- ✅ Automatic WebP conversion
- ✅ Responsive sizing
- ✅ Lazy loading
- ✅ Blur placeholder support
- ✅ Priority loading for above-the-fold images

---

## 📊 Image Statistics

- **Total Images**: 54 images
- **Logo**: 1 file (+ 7 responsive sizes)
- **Team Photos**: 3 files
- **Blog/Content Images**: ~40 files
- **Total Storage**: ~25-30MB

---

## 💡 Tips

1. **Always use Next.js Image component** for automatic optimization
2. **Provide alt text** for accessibility
3. **Use appropriate sizes** - don't load 2500w images for thumbnails
4. **Consider lazy loading** for images below the fold
5. **Add blur placeholders** for better UX during loading

---

*All images successfully migrated from Squarespace! 🎉*
