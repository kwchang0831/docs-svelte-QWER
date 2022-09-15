---
title: Folder Strucutre of QWER Source Code
---

# Folder Structure

This page will talk about the three most important folders in the codebase.

```text
.
├─ .changeset
├─ .git
├─ .vscode
├─ QWER
├─ src
├─ user
│
```

::: tip

For normal users, you will only need to work with the `user` folder.

:::

## QWER

This folder contains another program that will process and parse user provided data.

Here are the things, it will do:

- Markdown files preprocess.
- Asset files handling.
- Generate Posts and Tags metadata json files.

## src

This folder contains all the Svelte and SvelteKit related codes.

This basically where all the front-end stuff located.

## user

This folder contains user provided data, including the following

- Blog Posts in Markdown files
- Asset Files
- Configs
- Custom Svelte Components
- Site Public Folder
