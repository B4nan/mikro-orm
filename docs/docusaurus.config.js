/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'MikroORM',
  tagline: 'TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.',
  url: 'https://mikro-orm.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mikro-orm', // Usually your GitHub org/user name.
  projectName: 'mikro-orm', // Usually your repo name.
  themeConfig: {
    gtag: { trackingID: 'UA-135618258-1' },
    // algolia: {
    //   apiKey: '47ecd3b21be71c5822571b9f59e52544',
    //   indexName: 'docusaurus-2',
    //   algoliaOptions: {},
    // },
    navbar: {
      title: '',
      logo: {
        alt: 'MikroORM',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/installation', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://join.slack.com/t/mikroorm/shared_invite/enQtNTM1ODYzMzM4MDk3LWM4ZDExMjU5ZDhmNjA2MmM3MWMwZmExNjhhNDdiYTMwNWM0MGY5ZTE3ZjkyZTMzOWExNDgyYmMzNDE1NDI5NjA',
          label: 'Slack',
          position: 'right',
          title: 'Chat on Slack',
        },
        {
          href: 'https://github.com/mikro-orm/mikro-orm',
          label: 'GitHub',
          position: 'right',
          title: 'View on GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Installation & Usage', to: 'docs/installation' },
            { label: 'Quick Start', href: 'https://github.com/mikro-orm/mikro-orm#-quick-start' },
            { label: 'Migration from v2 to v3', to: 'docs/upgrading-v2-to-v3' },
            { label: 'Version 2.7 docs', to: 'docs/v2/installation' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/mikroorm/shared_invite/enQtNTM1ODYzMzM4MDk3LWM4ZDExMjU5ZDhmNjA2MmM3MWMwZmExNjhhNDdiYTMwNWM0MGY5ZTE3ZjkyZTMzOWExNDgyYmMzNDE1NDI5NjA',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/ask?tags=mikro-orm',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            { label: 'Blog', to: 'blog' },
            { label: 'Twitter', to: 'https://twitter.com/B4nan' },
            { label: 'GitHub Stars', to: 'https://github.com/mikro-orm/mikro-orm' },
          ],
        },
      ],
      logo: {
        alt: 'MikroORM',
        src: 'img/logo-header.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Martin Adámek. Built with Docusaurus. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mikro-orm/mikro-orm/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
