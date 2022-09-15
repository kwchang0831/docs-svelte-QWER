---
title: Deploying your QWER site
---

# 🚀 Deploying

We will be using either [Vercel](https://vercel.com/) or [Netlify](https://Netlify.com) for deployment. Get your own free account today.

## Vercel

1. Update `vercel.json` accordingly.

1. Install Vercle CLI.

   ```sh
   npm i -g vercel
   ```

1. Login and Setup.

   ```sh
   vercel
   ```

1. Build & Deploy.

   ```sh
   vercel --prod
   ```

   Or you can use build locally and then deploy with your prebuilt.

   ```sh
   vercel build --prod
   vercel deploy --prebuilt --prod
   ```

For detail information, please check [Get started with Vercel CLI](https://vercel.com/docs/cli).

## Netlify

1. Update `netlify.toml` accordingly.

1. Install Netlify CLI.

   ```sh
   npm i -g netlify-cli
   ```

1. Login.

   ```sh
   netlify login
   ```

1. Link the Git Repo for automatic deployment

   ```sh
   netlify link
   ```

For detail information, please check [Get started with Netlify CLI](https://docs.netlify.com/cli/get-started/).
