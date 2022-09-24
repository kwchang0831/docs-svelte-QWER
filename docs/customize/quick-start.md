---
title: Quick Start for Customizing QWER
---

# Quick Start for Customizing

Here is the Quick Start to customize some of the settings to make the QWER site truely yours.

## Step 1. Change the site Favicon

Replace both `user/public/favicon.png` and `user/public/favicon.ico` with your own assets. This will change the icon beside your site tilte in the broswer tab.

:::info

Only `user/public/favicon.png` is referenced in the head, atom feed, and json feed. `user/public/favicon.ico` is only for backup. You could probably just delete `user/public/favicon.ico`.

:::

## Step 2. Change your Avatar

Replace `user/assets/avatar.png` with your own asst. This will change the profile icon in the front page and author icon in the post heading.

This file is also referenced in `user/config/site.ts` for creating difference sizes of Avatar. Then, they are used for webmanifest icons which you can check from your chrome dev tools `Application` Tab > `Manifest`.

## Step 3. Change your Site Info and Settings

Open `user/config/site.ts`, replace `siteConfig` with your own information.

For more information, please check out [site.ts](/config/site-ts).

:::tip

For the `siteConfig.url`, you can come back modify it after you have deployed onto Vercel or Netlify and have the deployed url handy.

:::
