# todo
- Replace placeholder social links (GitHub/LinkedIn) in `app/layout.tsx`.
- Configure the Resend sender/recipient and verify your sending domain.
- Deploy behind HTTPS — `middleware.ts` redirects forwarded HTTP to HTTPS in production.
- Review the Content-Security-Policy in `next.config.ts` if you add other third-party
  services or scripts.
- Run `npm run build` and test a Lighthouse/PageSpeed pass against the deployed URL.
- Swap the CSS project-preview art for real optimized AVIF/WebP screenshots via
  `next/image`, with descriptive alt text, if you have them.
- Consider adding a challenge (e.g. Cloudflare Turnstile) if the form attracts spam
  the built-in honeypot field is a lightweight first layer only
