import { getFreeCoursesList } from '@/_services/cmsServices';
import { NextResponse } from 'next/server';

const URL = 'https://www.wscubetech.com';

export async function GET() {
  // Initialize an array to hold sitemap entries
  const sitemapEntries = [];

  // Fetch the list of free courses
  const tutorialsData = await getFreeCoursesList();

  if (tutorialsData.status) {
    // Map through each course result
    tutorialsData.result.forEach(({ slug: tutorialSlug, }) => {
      // Create a URL for each course slug
      sitemapEntries.push({
        url: `${URL}/resources/${tutorialSlug}/free-course`,  // Adjust the URL path as needed
        priority: 0.9,
      });
    });
  }

  // Generate the XML sitemap format
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries.length > 0
      ? sitemapEntries.map(
        ({ url, priority }) => `
            <url>
              <loc>${url}</loc>
              <priority>${priority}</priority>
            </url>
          `
      ).join('')
      : ''
    }
    </urlset>
  `;

  // Return the XML response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
