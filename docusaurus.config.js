// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Rumble',
  tagline:
      'IT Certifications learning notes and blogs. Kubernetes and cloud native ramblings',
  url: 'https://frosty-babbage-3125a3.netlify.app',
  // url: 'https://www.itcertificationsguide.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'Piotr1215',  // Usually your GitHub org/user name.
  projectName: 'dca-prep-kit',    // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Piotr1215/dca-prep-kit/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          // Please change this to your repo.
          editUrl: 'https://github.com/Piotr1215/dca-prep-kit/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'dark',
        },
        navbar: {
          title: 'Cloud Rumble',
          logo: {
            alt: 'IT Certifications Guide',
            src: 'img/logo.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Docs',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/Piotr1215',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Docs',
                  to: '/docs/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Medium Blog',
                  href: 'https://medium.com/@piotrzan',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/Piotr1215',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/Piotr1215',
                },
                {
                  label: 'Impressum',
                  to: '/impressum',
                }
              ],
            },
          ],
          copyright: `Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['gherkin'], }, }),
};

module.exports = config;
