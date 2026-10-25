import type { APIRoute } from 'astro';
import site from '../site.config';

// One-page theme: the sitemap lists the home page. Add new pages here.
const pages = ['/'];

export const GET: APIRoute = () => {
  const urls = pages.map((page) => `  <url><loc>${new URL(page, site.url).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
