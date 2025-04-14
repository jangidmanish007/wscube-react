import { getCategoryList } from '@/_services/categoryService';
import { NextResponse } from 'next/server';
// Adjust import paths

const URL = 'https://www.wscubetech.com';

export async function GET() {
  // Get Categories
  let categoryXmls = [];
  const categories = await getCategoryList();
  if (categories.status) {
    categoryXmls = categories.result.map(({ slug, updated_at }) => ({
      url: `${URL}/${slug}`,  // Adjust if needed
      lastModified: new Date(updated_at).toISOString(),
      priority: 0.5,
    }));
  }

  // Combine all the XMLs
  const sitemapEntries = [...categoryXmls];

  // Generate XML format
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${sitemapEntries?.length > 0 && sitemapEntries
      .map(
        ({ url, lastModified, priority }) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${lastModified}</lastmod>
            <priority>${priority}</priority>
          </url>
        `
      )
      .join('')}
    </urlset>
  `;

  // Return XML response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
