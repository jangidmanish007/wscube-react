import { getResourcesSitemap } from '@/_services/cmsServices';
import { NextResponse } from 'next/server';

const URL = 'https://www.wscubetech.com';

export async function GET() {
  // Initialize arrays to hold sitemap entries
  const quizzesArry = [];

  const quizzesData = await getResourcesSitemap({ type: 'quiz' });

  if (quizzesData.status) {

    quizzesData?.result.forEach(({ slug: tutorialSlug, updated_at, }) => {
      quizzesArry.push({
        url: `${URL}/resources/${tutorialSlug}/quiz`,
        lastModified: new Date(updated_at).toISOString(),
        priority: 0.9,
      });
    });
  }

  const sitemapEntries = [...quizzesArry];

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

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
