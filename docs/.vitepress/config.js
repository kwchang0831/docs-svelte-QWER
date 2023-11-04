import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';

const links = [];

const ogLang = 'en-US';
const ogTitle = 'QWER DOCS';
const ogDescription =
  'Documentation for QWER - SvelteKit Powered Static Site Generator - Simply Awesome, Powerful, Performant, and Built with Love ❤.';
const ogImage = 'https://docs-svelte-qwer.vercel.app/og.webp';
const ogUrl = 'https://docs-svelte-qwer.vercel.app/';
const gitCommitSHA = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 8) || 'dev';

export default {
  lang: ogLang,
  title: ogTitle,
  description: ogDescription,

  head: [
    // ['link', { rel: 'preconnect', href: 'https://plausible.kwchang0831.dev' }],
    // [
    //   'script',
    //   {
    //     defer: '',
    //     'data-domain': 'docs-svelte-qwer.vercel.app',
    //     src: 'https://plausible.kwchang0831.dev/js/plausible.js',
    //   },
    // ],
    ['meta', { name: 'author', content: 'kwchang0831' }],
    ['meta', { property: 'og:locale', content: ogLang }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:description', content: ogDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
  ],

  cleanUrls: 'with-subfolders',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/intro/getting-started' },
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

    algolia: {
      appId: 'EQR5BHYH0A',
      apiKey: '784e66f130e45be2ee59446a951e6c06',
      indexName: 'svelte-qwer',
    },

    // localeLinks: {
    //   text: 'English',
    //   items: [{ text: '中文', link: 'https://doc-svelte-qwer.vercel.app' }],
    // },

    sidebar: {
      '/intro/': sidebarGuide(),
      '/writing/': sidebarGuide(),
      '/customize/': sidebarGuide(),
      '/qwer/': sidebarGuide(),
      '/contributing/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/kwchang0831/docs-svelte-QWER' }],

    lastUpdatedText: 'Updated Date',

    outline: 'deep',

    footer: {
      message: `Released under the MIT License. (${gitCommitSHA})`,
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
        { text: 'Getting Started', link: '/intro/getting-started' },
        { text: 'What is QWER?', link: '/intro/what-is-qwer' },
        { text: 'Developing', link: '/intro/developing' },
        { text: 'Deploying', link: '/intro/deploying' },
      ],
    },
    {
      text: 'Customize',
      collapsible: true,
      items: [
        { text: 'QuickStart', link: '/customize/quick-start' },
        { text: 'Website Analytics', link: '/customize/website-analytics' },
        { text: 'i18n', link: '/customize/i18n' },
      ],
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown Basic', link: '/writing/markdown-basic' },
        { text: 'Markdown Extended', link: '/writing/markdown-extended' },
        { text: 'Front Matter', link: '/writing/frontmatter' },
        { text: 'Image Asset Handling', link: '/writing/image-asset-handling' },
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
        { text: 'user/public', link: '/qwer/user-public' },
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
        { text: 'userTheme.scss', link: '/config/userTheme-scss' },
      ],
    },
  ];
}
