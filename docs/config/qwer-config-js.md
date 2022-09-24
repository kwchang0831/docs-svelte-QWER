---
title: user/config/QWER.config.js
---

# QWER.config.js

## User Config

These are default values that you might consider modify to fit your taste.

```ts
export const UserConfig = {
  DefaultDesktopShowTagFilter: false,
  DefaultCoverStyle: 'IN',
  DefaultTagName: 'tags',
  DefaultPostLanguage: 'English',
  PostLanguageTagName: 'Language',
  SeriesTagName: 'Series',
  YearTagName: 'Year',

  ...
};
```

## Adjust responsive images

QWER comes with image pre-process procedure. It will take your cover image or other image assets that are referenced in the post, and generate smaller resoultions and image formats that has better compression while maintaining similar visual quality.

If you need to tune it, the following is the part where you would want to adjust.

```ts
export const UserConfig = {
  ...

  BannerImage: {
    width: 768,
    height: 320,
    format: ['avif'],
  },

  ExtraResolutions: {
    1280: {
      width: 1280,
      format: ['avif'],
      minWidth: '1024px',
    },
    800: {
      width: 800,
      format: ['avif'],
      minWidth: '360px',
    },
  },

  // For original image without reszing
  ExtraFormats: ['avif'],

  ...
};
```

## Protect files from overwritten by auto-generated routes

QWER will auto generate routes based on `user/blogs`.

If you have created your own routes, it would be better for you to list them here to prevent accidently overwritten.

```ts
export const UserConfig = {
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
};
```

## Special Routing Rules

Normally, QWER generate slug/url based on the folder structure inside `user/blogs`.

eg. `/posts/{year}/{title}.{file-exntension}` => `/post/{year}/{title}`

### Rule : PostsYearMonthDate

As a user requested, a custom routing rule has been created which can be enabled in the `UserConfig`.

```js
export const UserConfig = {
  ...

  RoutingRules: {
    PostsYearMonthDate: true,
  },
};
```

This rule will change routing rules for files under `/user/blogs/posts`.

eg. `/posts/{year}/{title}.{file-exntension}` => `/posts/{year}/{month}/{day}/{title}`

## The Rest

The rest of values should not be modified. Unless you know what you are doing.
