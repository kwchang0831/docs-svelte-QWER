---
title: user/config/site.ts
---

# site.ts

This file contains all the settings to customize your QWER site.

:::tip

You are required to update this file.

:::

## siteConfig

```ts
export const siteConfig: Site.Config = {
  url: 'https://svelte-qwer.vercel.app',
  title: 'QWER',
  subtitle: '🚀 QWER - Built using Svelte with ❤',
  description: '🚀 QWER - Awesome Blog Starter, Built using Svelte with ❤',
  lang: 'en',
  timeZone: 'Asia/Taipei',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'John Doe',
    status: '❤️',
    statusTip:
      '<a href="https://github.com/kwchang0831/svelte-QWER" style="color:#0F0" onMouseOver="this.style.color=\'#0FF\'" onMouseOut="this.style.color=\'#0F0\'" >QWER</a> is Awesome !',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://github.com/kwchang0831/svelte-QWER',
    github: 'https://github.com/kwchang0831',
    email: 'contact@kwchang0831.dev',
    bio: `lorem ipsum! <br/> dolor sit amet!`,
  },
};
```

Most of the settings are pretty much self-explanatory.

### statusTip

This takes plain text or HTML text. The input will NOT be sanitized.

### avatar_128

These is used for Index Profile avatar and Post Heading author avatar.

### avatar_xxx_png

These avatar are used for webmanifest.

## headConfig

This custom head is where you can inject your script like Google Analytics.

```ts
export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/kwchang0831'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Enviroment
        ]
      : [
          // For Production Enviroment
          '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
        ],
};
```

## dateConfig

Check out [MSDN #Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) for more information about how to set up this config.

```ts
export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};
```

## giscusConfig

Set up your Giscus following the official generator: [https://giscus.app/](https://giscus.app/).

::: tip

Make sure that:

1. The repository is [public](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-public), otherwise visitors will not be able to view the discussion.
1. The [giscus](https://github.com/apps/giscus) app is installed, otherwise visitors will not be able to comment and react.
1. The Discussions feature is turned on by [enabling it for your repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository).

:::

```ts
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'kwchang0831/svelte-QWER',
  repoId: 'R_kgDOHiLP-g',
  category: 'Comments',
  categoryId: 'DIC_kwDOHiLP-s4CQgDm',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};
```

## navConfig & mobilenavConfig

You will need to set up desktop and mobile version of header navigation sperately.

Drop down menu orientation:

```ts
export enum Orientation {
  TOP = 0,
  RIGHT,
  BOT,
  LEFT,
}
```

Full Example:

```ts
export const navConfig: (DD.Nav | DD.Link)[] = [
  {
    name: 'Get Started',
    orientation: 2,
    links: [
      {
        name: 'Hello World',
        url: '/hello-world',
        prefetch: true,
      },
      {
        name: 'Example Post',
        url: '/example',
        prefetch: true,
      },
      {
        name: 'Intro to QWER',
        url: '/intro-to-QWER',
        prefetch: true,
      },
    ],
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Get QWER 🚀',
    url: 'https://github.com/kwchang0831/svelte-QWER',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    {
      name: 'Get Started',
      orientation: 1,
      links: [
        {
          name: 'Hello World',
          url: '/hello-world',
          prefetch: true,
        },
        {
          name: 'Example Post',
          url: '/example',
          prefetch: true,
        },
        {
          name: 'Intro to QWER',
          url: '/intro-to-QWER',
          prefetch: true,
        },
      ],
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Get QWER 🚀',
      url: 'https://github.com/kwchang0831/svelte-QWER',
      target: '_blank',
      rel: 'noreferrer noopener',
    },
  ],
};
```
