---
title: Contributing to QWER
---

# Contributing Guide

All contribution are Welcome. 😊

## Prepare for Development

1. Get pnpm

   ```sh
   npm i -g pnpm
   ```

1. Clone

   ```sh
   git clone git@github.com:kwchang0831/svelte-QWER.git
   ```

1. Enter

   ```sh
   cd svelte-QWER
   ```

1. Install

   ```sh
   pnpm i && pnpm husky
   ```

1. Svelte Check

   ```sh
   pnpm check
   ```

1. Lint Format

   ```sh
   pnpm format
   ```

## Sending PRs

1. Conventional Commits

   Try your best to adopt the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

1. Gitmoji

   Try your best to adopt [gitmoji](https://gitmoji.dev/)

1. Changelog

   For changes to be reflected in package changelogs, you can do the following and follow the prompts.

   ```sh
   pnpm changeset add
   ```

1. Coding style

   We wrote shitcodes 💩 a lot myself. Try to write better code than us, you will be fine.
