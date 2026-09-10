import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  poweredByHeader:false,
  compress:true,
  images:{formats:['image/avif','image/webp'],deviceSizes:[640,750,828,1080,1200,1920]},
  async headers(){return [{source:'/(.*)',headers:[
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'X-Frame-Options',value:'DENY'},
    {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
    {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
    {key:'Content-Security-Policy',value:"default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; connect-src 'self' https://vitals.vercel-insights.com; font-src 'self' data:;"}
  ]}]}
}
export default nextConfig
