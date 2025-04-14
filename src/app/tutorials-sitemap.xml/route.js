import { getResourcesSitemap } from '@/_services/cmsServices';
import { NextResponse } from 'next/server';

const URL = 'https://www.wscubetech.com';

export async function GET() {
  const tutorialsArry = [];
  const lessonArry = [];

  const tutorialsData = await getResourcesSitemap({ type: 'tutorial' });

  if (tutorialsData.status) {
    // Map through each tutorial
    tutorialsData.result.forEach(({ slug: tutorialSlug, updated_at, lessons }) => {
      // Add tutorial URL
      tutorialsArry.push({
        url: `${URL}/resources/${tutorialSlug}`,  // Adjust if needed
        lastModified: new Date(updated_at).toISOString(),
        priority: 0.9,
      });

      // Check if lessons exist and map through them
      if (lessons && lessons?.length > 0) {
        lessons.forEach(({ slug: lessonSlug, updated_at: lessonUpdatedAt }) => {
          lessonArry.push({
            url: `${URL}/resources/${tutorialSlug}/${lessonSlug}`,  // Construct lesson URL
            lastModified: new Date(lessonUpdatedAt).toISOString(),
            priority: 0.9,
          });
        });
      }
    });
  }

  // Combine all the XMLs
  const sitemapEntries = [...tutorialsArry, ...lessonArry];

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
