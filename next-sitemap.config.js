const siteUrl = 'https://www.wscubetech.com/';
module.exports = {
  siteUrl,
  changefreq: null,
  priority: null,
  lastmod: null,
  exclude: [
    '/404',
    '/courses-sitemap.xml',
    '/blog/sitemap_index.xml',
    '/tutorials-sitemap.xml',
    '/free-courses-sitemap.xml',
    '/programs-sitemap.xml',
    '/quizzes-sitemap.xml',
    '/categories-sitemap.xml',
    '/landing-page/digital-marketing/thank-you',
    '/portfolio',
    '/events/data-analytics-course',
    '/thank-you-data-analytics-course'
  ],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: ['/', '/blog/wp-admin/admin-ajax.php'] },
      {
        userAgent: '*',
        disallow: [
          '/404',
          '/portfolio',
          '/blog/wp-admin/',
          '/blog/wp-content/plugins/',
          '/events/',
          '/events/data-analytics-course',
          '/thank-you-data-analytics-course'
        ]
      }
    ],
    additionalSitemaps: [
      `${siteUrl}categories-sitemap.xml`,
      `${siteUrl}courses-sitemap.xml`,
      `${siteUrl}tutorials-sitemap.xml`,
      `${siteUrl}programs-sitemap.xml`,
      `${siteUrl}quizzes-sitemap.xml`,
      `${siteUrl}free-courses-sitemap.xml`,
      `${siteUrl}blog/sitemap_index.xml`,
    ],
  },
  // Include static pages in the main sitemap-0.xml
  additionalPaths: async (config) => [
    {
      loc: '/',
      lastmod: new Date().toISOString(),
      priority: '1.0',
    },
    {
      loc: '/jaipur',
      lastmod: new Date().toISOString(),
      priority: 0.9,
    },
    {
      loc: '/jodhpur',
      lastmod: new Date().toISOString(),
      priority: 0.9,
    },
    {
      loc: '/contact',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/about',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/events',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/privacy-policy',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/terms-and-conditions',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/refund-and-cancellation',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/refund-and-cancellation',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
    {
      loc: '/faq',
      lastmod: new Date().toISOString(),
      priority: 0.5,
    }
  ],
};
