# SyncWellnessCo

Premium Women's Health Coaching website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Shadcn-style UI components.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll and hover animations
- **Embla Carousel** — testimonial slider with autoplay, infinite loop, and swipe
- **Radix UI** — accessible accordion and slot primitives

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Status |
|-------|--------|
| `/` | Full homepage |
| `/about`, `/programs`, `/testimonials`, `/resources`, `/blog`, `/consultation`, `/faq`, `/contact` | Under development placeholder |

## Project Structure

```
src/
├── app/              # Pages and layout
├── components/
│   ├── home/         # Homepage sections
│   ├── layout/       # Navbar, Footer
│   └── ui/           # Reusable UI primitives
├── data/             # Mock content & site config
└── lib/              # Utilities
```

## Customization

- **Brand & SEO**: `src/data/site.ts`
- **Testimonials**: `src/data/testimonials.ts`
- **Programs**: `src/data/programs.ts`
- **FAQs**: `src/data/faqs.ts`
- **Colors**: `src/app/globals.css`

Replace Unsplash placeholder images with your coach photos and embed real testimonial videos in `VideoTestimonialsSection`.

## Build

```bash
npm run build
npm start
```
