# IT Student Portfolio

A dark editorial/technical portfolio built with Next.js, designed for fast loading, accessibility, mobile responsiveness, and simple deployment.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Add your Resend values if you want the contact form to send email.
3. Set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain.
4. Run `npm install` then `npm run dev`.

## MCP / design tooling

The project includes `.mcp.json` for the current 21st MCP. Add your own `API_KEY_21ST` as an environment variable; never commit it. The current 21st docs say the old Magic MCP has been unified into 21st MCP.

For UI/UX Pro Max, install the current CLI in your AI coding environment with `npx ui-ux-pro-max-cli init --ai codex` (or your client). Do not commit API keys or personal global configuration.

## Production checklist

- Replace example.com / placeholder social links.
- Configure Resend sender, recipient, and domain.
- Deploy behind HTTPS; middleware also redirects forwarded HTTP to HTTPS in production.
- Review CSP after adding third-party services.
- Run a production build and Lighthouse/PageSpeed against the deployed URL. A real speed score cannot be measured accurately from source alone.
- Replace CSS project previews with optimized AVIF/WebP images if needed and keep descriptive alt text.
- Consider adding Cloudflare Turnstile if the form attracts spam; the included honeypot is a lightweight first layer.
- Review privacy/terms with appropriate legal guidance before publishing for a real business.
