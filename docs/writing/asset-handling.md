---
title: Asset Handling for QWER Post Writing
---

# Asset Handling

All Markdown files are compiled into Svelte components and processed by QWER. You can reference assets using relative URLs, for example:

```md
![Example](./example.jpg)
```

## Relative URLs

Say we have file structures like the following:

```text
.
├─ user
│  └─ blogs
│     ├─ first-post
│     │  ├─ index.md
|     │  └─ example.jpg
│     └─ second-post
│        ├─ index.md
|        └─ example.jpg
```

We are currently writing `first-post/index.md`. We wanna reference `first-post/example.jpg`. We can do the following:

```md
<!-- first-post/index.md -->

This is a example picture:

![Example](./example.jpg)
```

Or

```md
<!-- first-post/index.md -->

This is a example picture:

![Example](/first-post/example.jpg)
```

And then, say we are currently writing `second-post/index.md`. We wanna reference `first-post/example.jpg`. We can do the following:

```md
<!-- second-post/index.md -->

Example picture from first-post folder:

![Example](../first-post/example.jpg)
```

Or

```md
<!-- second-post/index.md -->

Example picture from first-post folder:

![Example](/first-post/example.jpg)
```

## Public Files

Say we have file structures like the following:

```text
.
├─ user
│  ├─ blogs
│  |   └─ first-post
│  |      ├─ index.md
|  |      └─ example.jpg
│  └─ public
│     └─ favicon.png
```

We are currently writing `first-post/index.md`. We wanna reference `public/favicon.png`. We can do the following:

```md
<!-- first-post/index.md -->

This is a favicon picture:

![favicon](/favicon.png)
```

However, there is a caveat.

Say we have file structures like the following:

```text
.
├─ user
│  ├─ blogs
│  |   └─ first-post
│  |      ├─ index.md
|  |      └─ example.jpg
│  └─ public
│     ├─ favicon.png
│     └─ first-post
|        └─ example.jpg
```

Checkout the following example

```md
<!-- first-post/index.md -->

This is a example picture:

![Example](/first-post/example.jpg)
```

Will it reference to `public/first-post/example.jpg` or `blogs/first-post/example.jpg` ?

The answer is `blogs/first-post/example.jpg`. QWER will always prioritise images under blogs folders since images under blog folders will be preprocessed by imagetools for different size and format respecting to the config file `QWER.config.js`.
