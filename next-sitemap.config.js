/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.yetumodelagemdigital.com", // troca para o domínio final oficial da empresa
  generateRobotsTxt: true, // gera automaticamente robots.txt
  sitemapSize: 7000,
  outDir: 'public',
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/404"], // páginas que não queres indexar
// ou exclude: ['/admin/*', '/api/*'], // páginas internas que não devem ser indexadas
 robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api'] },
    ],
    additionalSitemaps: [
      'https://yetudigital.co.ao/sitemap.xml',
    ],
  },
};
