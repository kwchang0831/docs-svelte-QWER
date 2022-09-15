---
title: user/config/QWER.config.js
---

# QWER.config.js

::: tip

Generally, you DO NOT need to modify this file at all.

:::

## Default Values

These are default values that you might consider modify to fit your taste.

```ts
export const Config = {
  ...

  DefaultCoverStyle: 'IN',
  DefaultTagName: 'tags',
  PostLanguageTagName: 'Language',
  DefaultPostLanguage: 'English',
  SeriesTagName: 'Series',
  YearTagName: 'Year',
};
```

## Adjust responsive images

QWER comes with image pre-process procedure. It will take your cover image or other image assets that are referenced in the post, and generate smaller resoultions and image formats that has better compression while maintaining similar visual quality.

If you need to tune it, the following is the part where you would want to adjust.

```js
// QWER.confitg.js

export const ImageConfig = {
  ...

  BannerImage: {
    width: 900,
    height: 200,
    format: ['avif', 'webp'],
  },

  ExtraResolutions: {
    1280: {
      width: 1280,
      format: ['avif', 'webp'],
      minWidth: '1280px',
    },
    1024: {
      width: 1024,
      format: ['avif', 'webp'],
      minWidth: '1024px',
    },
    854: {
      width: 854,
      format: ['avif', 'webp'],
      minWidth: '768px',
    },
    640: {
      width: 640,
      format: ['avif', 'webp'],
      minWidth: '360px',
    },
  },

  // For original image without reszing
  ExtraFormats: ['avif'],
};
```

## Protect files from overwritten by auto-generated routes

QWER will auto generate routes based on `user/blogs`.

If you have created your own routes, it would be better for you to list them here to prevent accidently overwritten.

```ts
export const Config = {
  ...

  PreserveFilesInRoutes: [
    'src/routes/+error.svelte',
    'src/routes/+layout.svelte',
    'src/routes/+page.svelte',
    'src/routes/atom.xml/+server.ts',
    'src/routes/feed.json/+server.ts',
    'src/routes/manifest.webmanifest/+server.ts',
    'src/routes/sitemap.xml/+server.ts',
    'src/routes/robots.txt/+server.ts',
  ],

  ...
}
```

## The Rest

The rest of values should not be modified. Unless you know what you are doing.
