import { getCategoryList } from '@/_services/categoryService';
import { getOfflineCoursesList, getOnlineCoursesList } from '@/_services/courseService';
import { NextResponse } from 'next/server';
// Adjust import paths

const URL = 'https://www.wscubetech.com';

export async function GET() {

  // Get Online Courses
  let onlineCoursesXmls = [];
  const onlineCourses = await getOnlineCoursesList();
  if (onlineCourses.status) {
    onlineCoursesXmls = onlineCourses.result.map(({ slug, updated_at }) => ({
      url: `${URL}/${slug}`,  // Adjust if needed
      lastModified: new Date(updated_at).toISOString(),
      priority: 0.9,
    }));
  }

  // Get Offline Courses
  let offlineCoursesXmls = [];
  const offlineCourses = await getOfflineCoursesList();
  if (offlineCourses.status) {
    offlineCoursesXmls = offlineCourses.result.flatMap(({ slug_url: centerSlug, updated_at: centerUpdatedAt, CourseMasters }) =>
      CourseMasters.map(({ slug, updated_at }) => ({
        url: `${URL}/${centerSlug}/${slug}`,  // Adjust URL structure as per your route
        lastModified: new Date(updated_at).toISOString(),
        priority: 0.9,
      }))
    );
  }

  // Combine all the XMLs
  const sitemapEntries = [...onlineCoursesXmls, ...offlineCoursesXmls];

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
      .join('')
    }
    </urlset >
  `;

  // Return XML response
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
