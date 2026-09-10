# IT Student Portfolio

A dark, editorial/technical Next.js (App Router) portfolio: hero, project grid, about,
toolkit, and a working contact form — plus privacy/terms pages, cookie-consent-gated
analytics, sitemap/robots, and security headers.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

Set these in `.env.local` (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — your production HTTPS domain (used in canonical URLs, the
  sitemap, robots.txt, and OpenGraph metadata).
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — required for the contact
  form to send email via [Resend](https://resend.com). If unset, the form still validates
  input but returns a friendly "not configured yet" message instead of sending.

## Project structure

```
app/
  layout.tsx           root layout, metadata, header/footer
  page.tsx              home page (hero, work, about, toolkit, contact)
  not-found.tsx          404 page
  privacy/page.tsx        privacy policy
  terms/page.tsx          terms & conditions
  robots.ts               robots.txt
  sitemap.ts               sitemap.xml
  api/contact/route.ts     contact form email handler
  components/
    ContactForm.tsx        client-side form + validation
    CookieBanner.tsx        analytics consent banner
    ConsentAnalytics.tsx    loads Vercel Analytics only after consent
public/
  icon.svg                 favicon
  opengraph-image.svg       social preview image
```

## Production checklist

- Replace placeholder social links (GitHub/LinkedIn) in `app/layout.tsx`.
- Configure the Resend sender/recipient and verify your sending domain.
- Deploy behind HTTPS — `middleware.ts` redirects forwarded HTTP to HTTPS in production.
- Review the Content-Security-Policy in `next.config.ts` if you add other third-party
  services or scripts.
- Run `npm run build` and test a Lighthouse/PageSpeed pass against the deployed URL.
- Swap the CSS project-preview art for real optimized AVIF/WebP screenshots via
  `next/image`, with descriptive alt text, if you have them.
- Consider adding a challenge (e.g. Cloudflare Turnstile) if the form attracts spam —
  the built-in honeypot field is a lightweight first layer only.
- Have the privacy policy and terms reviewed by someone qualified before using this for
  a real business, not just a personal/student portfolio.
