/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://jnarbeidsbemiddeling.nl',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // optioneel, alleen gebruiken als je een custom server-sitemap hebt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://jnarbeidsbemiddeling.nl/sitemap.xml',
    ],
  },
};
