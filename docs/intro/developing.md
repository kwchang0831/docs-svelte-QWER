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
