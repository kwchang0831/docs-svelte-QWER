---
title: Website Analytics for QWER
---

# Website Analytics

Website analytics measure and track your QWER site traffic. Depends on the service provider, you will probably be asked to insert some code snippet into the `<head>` section. We will give some examples of setting up analytics.

## Google Analytics (GA4)

After creating your GA4 resource, you will get your own Google Tag code snippet via installation instructions similar to the following. ([Instruction from Google](https://support.google.com/google-ads/answer/12002338?hl=en#zippy=%2Cset-up-your-google-tag-from-google-analytics-instructions))

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'TAG_ID');
</script>
```

Simply paste them into your config `user/config/site.ts`.

:::tip

Don't forget to replace `TAG_ID` with your own gtag ID.

:::

```ts
export const headConfig: Site.Head = {
  ...
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Google tag (gtag.js)
          `<script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>`,
          `<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'TAG_ID');
          </script>`,
        ],
};

```

If you want to use [PartyTown](https://partytown.builder.io/) which runs Third-Party Scripts From A Web Worker, you will modify the scripts similar to the following:

```ts
export const headConfig: Site.Head = {
  ...
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Google tag (gtag.js)
          `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>`,
          `<script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'TAG_ID');
          </script>`,
        ],
};

```

For more information about [PartyTown](https://partytown.builder.io/), please check out their documentation.

## Plausible

If you happen to have your own server running Plausible analytics, you will get your Javascript snippet after you created a site, the code snippet will look similar to the following:

```html
<script defer data-domain="SITE_URL" src="https://YOUR_PLAUSIBLE_URL/js/plausible.js"></script>
```

Simply paste them into your config `user/config/site.ts`.

:::tip

Don't forget to replace `SITE_URL` and `YOUR_PLAUSIBLE_URL` with your own URL.

:::

```ts
export const headConfig: Site.Head = {
  ...
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Plausible
          '<link rel="preconnect" href="https://YOUR_PLAUSIBLE_URL" />',
          '<script defer data-domain="SITE_URL" src="https://YOUR_PLAUSIBLE_URL/js/plausible.js"></script>',
        ],
};

```

If you want to use [PartyTown](https://partytown.builder.io/) which runs Third-Party Scripts From A Web Worker, you will modify the scripts similar to the following:

```ts
export const headConfig: Site.Head = {
  ...
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Plausible
          '<link rel="preconnect" href="https://YOUR_PLAUSIBLE_URL" />',
          '<script defer type="text/partytown" data-domain="SITE_URL" src="https://YOUR_PLAUSIBLE_URL/js/plausible.js"></script>',
        ],
};

```

For more information about [PartyTown](https://partytown.builder.io/), please check out their documentation.
