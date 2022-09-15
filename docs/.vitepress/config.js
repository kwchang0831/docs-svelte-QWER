import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';

const links = [];

export default {
  lang: 'en-US',

  title: 'QWER DOCS',

  description: 'Documentation for QWER',

  head: [
    ['link', { rel: 'preconnect', href: 'https://plausible.kwchang0831.dev' }],
    [
      'script',
      {
        defer: '',
        'data-domain': 'docs-svelte-qwer.vercel.app',
        src: 'https://plausible.kwchang0831.dev/js/plausible.js',
      },
    ],
  ],

  cleanUrls: 'with-subfolders',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/intro/get-started' },
      { text: 'Config', link: '/config/site-ts' },
      {
        text: 'CHANGELOG',
        items: [
          { text: 'svelte-QWER', link: 'https://github.com/kwchang0831/svelte-QWER/blob/main/CHANGELOG.md' },
          { text: 'QWER', link: 'https://github.com/kwchang0831/svelte-QWER/blob/main/QWER/CHANGELOG.md' },
        ],
      },
      { text: 'Get QWER 🚀', link: 'https://github.com/kwchang0831/svelte-QWER' },
    ],

    editLink: {
      pattern: 'https://github.com/kwchang0831/docs-svelte-QWER/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // localeLinks: {
    //   text: 'English',
    //   items: [{ text: '中文', link: 'https://doc-svelte-qwer.vercel.app' }],
    // },

    sidebar: {
      '/intro/': sidebarGuide(),
      '/writing/': sidebarGuide(),
      '/qwer/': sidebarGuide(),
      'contributing/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/kwchang0831/docs-svelte-QWER' }],

    lastUpdatedText: 'Updated Date',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present @kwchang0831',
    },
  },

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      });
  },

  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://docs-svelte-qwer.vercel.app/' });
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
  },
};

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'Get Started', link: '/intro/get-started' },
        { text: 'What is QWER?', link: '/intro/what-is-qwer' },
        { text: 'Developing', link: '/intro/developing' },
        { text: 'Deploying', link: '/intro/deploying' },
      ],
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown Basic', link: '/writing/markdown-basic' },
        { text: 'Markdown Extended', link: '/writing/markdown-extended' },
        { text: 'Front Matter', link: '/writing/frontmatter' },
        { text: 'Asset Handling', link: '/writing/asset-handling' },
      ],
    },
    {
      text: 'QWER',
      collapsible: true,
      items: [
        { text: 'Folder Structure', link: '/qwer/folder-structure' },
        { text: 'user Folder', link: '/qwer/user-folder' },
        { text: 'user/assets', link: '/qwer/user-assets' },
        { text: 'user/config', link: '/qwer/user-config' },
      ],
    },
    {
      text: 'Contributing',
      collapsible: true,
      items: [{ text: 'Contributing Guide', link: '/contributing/contributing-guide' }],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      collapsible: true,
      items: [
        { text: 'site.ts', link: '/config/site-ts' },
        { text: 'QWER.config.js', link: '/config/qwer-config-js' },
      ],
    },
  ];
}
