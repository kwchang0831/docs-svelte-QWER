---
title: Developing with QWER
---

# Developing

This section will shlow all the necessary information to develop with QWER.

## List of commonly used commands

| Commands         | Purpose                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `pnpm i`         | Install Dependencies.                                                                            |
| `pnpm husky`     | Set up pre-commit actions.                                                                       |
| `pnpm dev`       | Start dev sever. Be sure to `pnpm i` first.                                                      |
| `pnpm build`     | Build the site locally.                                                                          |
| `pnpm preview`   | Preview the pre-built site with local server. Be sure to `pnpm build` first.                     |
| `pnpm clean`     | Clean auto-generated files. Please DONOT commit auto-generated files.                            |
| `pnpm cleandeep` | Deep clean.<br/>Remove auto-generated files as well as `node_modules`, `.svelte-kit`, and etc... |
| `pnpm format`    | Run prettier on the source code to maintian consistent format.                                   |

:::tip

While `pnpm dev` is running, you can do <kbd>Ctrl + C</kbd> to stop it.

If you encountered any issues, always try to restart the dev sever first.

:::

## `pnpm husky`

[husky](https://github.com/typicode/husky) will install the following pre-commit hooks.

- [gitmoji](https://github.com/carloscuesta/gitmoji-cli)

  This helps developer to easily and interactively commit with [gitmoji](https://github.com/carloscuesta/gitmoji) - an initiative to standardize and explain the use of emojis on GitHub commit messages.

  After running `pnpm husky`, the commit hook is added. You will commit changes like you usually do, then follow the prompts to finish your commit.

  ```sh
  git add files

  git commit
  #or
  git commit -m "message"
  ```

  :::tip

  - For list of gitmoji, check out https://gitmoji.dev/.

  - You might also want to check out [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

  - If you want to use [gitmoji](https://github.com/carloscuesta/gitmoji-cli) with other projects, simply install it globally.

    ```sh
    npm i -g gitmoji

    // In the repo folder, init as commit hook
    gitmoji -i

    git add file
    git commit
    ```

    For other usages, check out [carloscuesta/gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

  :::

- [lint-staged](https://github.com/okonet/lint-staged)

  This helps developer automatically format / prettier codes right before commiting the codes to make sure the codes commited are all in consistent style.
