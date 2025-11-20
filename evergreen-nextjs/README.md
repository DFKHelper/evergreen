# Evergreen Chiropractic Website

Modern Next.js website for Evergreen Chiropractic - Nashville's only Gonstead chiropractic office.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity v4.16.0
- **Deployment**: Vercel (ready to deploy)

## 📦 Project Structure

```
evergreen-nextjs/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── services/          # Services page
│   ├── studio/            # Sanity Studio (/studio route)
│   ├── layout.tsx         # Root layout with nav & footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── lib/
│   └── sanity/           # Sanity CMS configuration
│       ├── client.ts      # Sanity client setup
│       ├── image.ts       # Image URL builder
│       └── queries.ts     # GROQ queries
├── sanity/               # Sanity schemas
│   └── schemas/
│       ├── documents/     # Document schemas
│       └── objects/       # Reusable object schemas
├── scripts/
│   └── migrate-content.ts # Content migration script
└── sanity.config.ts       # Sanity Studio configuration
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd evergreen-nextjs
npm install
```

### 2. Configure Environment Variables

Create or update `.env.local` with your Sanity credentials:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=ekj1nrtx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### 3. Get Your Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project (ekj1nrtx)
3. Go to **API** tab
4. Click **Add API token**
5. Name it "Production" and select **Editor** permissions
6. Copy the token and add it to `.env.local`

### 4. Run the Development Server

```bash
npm run dev
```

The site will be available at:
- **Website**: http://localhost:3001
- **Sanity Studio**: http://localhost:3001/studio

### 5. Migrate Content to Sanity

Once you have your API token, run the migration script:

```bash
npm run migrate
```

This will create:
- Site settings
- Team members (3 chiropractors)
- Categories
- Services
- Pages

## 📋 Available Pages

- **/** - Homepage
- **/about** - Team bios
- **/services** - Who we help
- **/contact** - Contact info
- **/faq** - FAQ
- **/studio** - Sanity CMS

## 🚀 Deployment

```bash
vercel --prod
```

---

Built for Evergreen Chiropractic - Nashville's only Gonstead office
