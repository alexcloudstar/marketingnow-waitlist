# MarketingNow Waitlist

A modern, high-performance waitlist landing page built with Next.js 16 and Supabase.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Supabase** - Database and authentication
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**

Create a `.env` file (see `.env.example`):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_publishable_key
NEXT_PUBLIC_BASE_URL=https://marketingnow.app
```

3. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the waitlist.

## Project Structure

```
├── app/
│   ├── actions/         # Server actions
│   └── page.tsx         # Main landing page
├── components/
│   ├── motion/          # Animated components
│   ├── sections/        # Page sections
│   └── ui/              # UI components
└── lib/
    ├── supabase.ts      # Supabase client
    └── data.ts          # Static data
```

## Features

- ✨ Beautiful gradient animations
- 📧 Email validation and duplicate prevention
- 🔒 Secure with Supabase RLS
- 🚀 Server-side rendering
- 📱 Fully responsive
- ⚡ Lightning-fast performance
- 🔍 SEO optimized with robots.txt, sitemap, and structured data

## SEO Setup

The project includes comprehensive SEO optimization:

- **Dynamic sitemap.xml** - Auto-generated at `/sitemap.xml`
- **robots.txt** - Search engine crawling rules at `/robots.txt`
- **Structured Data** - JSON-LD schema for rich snippets
- **Meta tags** - Optimized title, description, keywords
- **Open Graph** - Social media preview cards
- **Twitter Cards** - Enhanced Twitter sharing

### Required Assets

Create an Open Graph image for social sharing:
- **Path:** `public/og-image.png`
- **Size:** 1200×630px
- **Content:** Logo + tagline + call-to-action

## Deploy

Deploy easily on [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Make sure to add your environment variables in the Vercel dashboard.
