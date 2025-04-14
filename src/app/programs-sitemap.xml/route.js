import { getResourcesSitemap } from '@/_services/cmsServices';
import { NextResponse } from 'next/server';

const URL = 'https://www.wscubetech.com';

export async function GET() {
  // Initialize arrays to hold sitemap entries
  const tutorialsArry = [];
  const programArry = [];

  const tutorialsData = await getResourcesSitemap({ type: 'program' });

  if (tutorialsData.status) {

    tutorialsData.result.forEach(({ slug: tutorialSlug, updated_at, programs }) => {
      tutorialsArry.push({
        url: `${URL}/resources/${tutorialSlug}/programs`,
        lastModified: new Date(updated_at).toISOString(),
        priority: 0.9,
      });

      if (programs && programs.length > 0) {
        programs.forEach(({ slug: programSlug, updated_at: programUpdatedAt }) => {
          programArry.push({
            url: `${URL}/resources/${tutorialSlug}/programs/${programSlug}`,  // Construct program URL
            lastModified: new Date(programUpdatedAt).toISOString(),
            priority: 0.9,
          });
        });
      }
    });
  }

  const sitemapEntries = [...tutorialsArry, ...programArry];

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
