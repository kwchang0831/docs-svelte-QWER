---
title: user/assets Folder of QWER Source Code
---

# `user/assets` Folder

You can reference the assets in your Svelte Components and Config by `$assets`. It will reference to `user/assets`.

```ts
import Avatar from '$assets/avatar.png';
```

## Image Pre-process via `imagetools`

QWER includes `imagetools` for you to generate images with different format and size on the fly.

The following example will generate 2 pictures from `avatar.png` with 128x128 width and height. One picture is in `avif` format, the other one is in `webp` format.

```ts
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp';
```

To access the individual format:

```ts
const Avatar_128_AVIF = Avatar_128[0];
const Avatar_128_WEBP = Avatar_128[1];
```

For more information about `imagetools`, check out [https://github.com/JonasKruckenberg/imagetools](https://github.com/JonasKruckenberg/imagetools).
