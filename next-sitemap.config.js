/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jnarbeidsbemiddeling.nl',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // optioneel als je zelf dynamisch sitemap toevoegt
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
