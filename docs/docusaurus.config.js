/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const pkg = require('../package.json');
const versions = require('./versions.json');

module.exports = {
  title: 'MikroORM',
  tagline: 'TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.',
  url: 'https://mikro-orm.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mikro-orm',
  projectName: 'mikro-orm',
  scripts: ['/js/custom.js'],
  themeConfig: {
    gtag: { trackingID: 'UA-135618258-1' },
    algolia: {
      apiKey: '26fadcd97750a33cd8081a07dda2c0cf',
      indexName: 'mikro-orm',
      // algoliaOptions: { filters: `version:${versions[0]}` }, // TODO uncomment when v4 is released
      algoliaOptions: { filters: `version:3.6` },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'MikroORM',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'versions',
          // label: `${pkg.version}`, // TODO uncomment when v4 is released
          label: '3.6.15',
          position: 'left',
          'data-type': 'versions',
        },
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
            { label: 'Migration from v3 to v4', to: 'docs/upgrading-v3-to-v4' },
            // { label: 'Version 3.6 docs', to: 'docs/3.6/installation' }, // TODO uncomment when v4 is released
            { label: 'Version 3.6 docs', to: 'docs/installation' },
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
            { label: 'Twitter', to: 'https://twitter.com/MikroOrm' },
            { label: 'GitHub Stars', to: 'https://github.com/mikro-orm/mikro-orm' },
            { label: 'GitHub Sponsors', to: 'https://github.com/sponsors/B4nan' },
          ],
        },
      ],
      logo: {
        alt: 'MikroORM',
        src: 'img/logo-header.svg',
      },
      copyright: `Copyright © 2018-${new Date().getFullYear()} Martin Adámek. Built with Docusaurus. `,
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
