---
title: Markdown Extended Syntax for QWER Post Writing
---

# Markdown Extended Syntax

The following features are extension to the basic markdown syntax.

::: warning

Please noted, the following syntax are not standardize. You may assume they are only for QWER. Not all Markdown application support these elements and may not work the same.

:::

## Checkbox List (ul)

```md
- [ ] List Item 1 unchecked
- [x] List Item 2 checked
- [x] List Item 3 checked
```

## Footnotes

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]:
    Here's one with multiple paragraphs and code.  
    Indent paragraphs to include them in the footnote.  
    `{ my code }`  
    Add as many paragraphs as you like.
```

## Table

```md
| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

| Align Left | Align Center | Align Right |
| :--------- | :----------: | ----------: |
| Division 1 |  Division 2  |  Division 3 |
| Division 1 |  Division 2  |  Division 3 |
| Division 1 |  Division 2  |  Division 3 |
```

## Spoiler Text

```md
This is ||Spoiler Text||.
```

## Code Block

````md
```ts
/// title: examples/index.ts
for (let x in [0]) console.log(x);
```
````

````md
```ts
/// showLineNumber
/// diff
/// title: typescript-helloworld.ts
/// hlLines: 2,3-5
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

+ var greeter = new Greeter("Hello, Ministry of Programming!");
+ var str = greeter.greet();
- console.log("Test");
```
````

## Info Block

Here are the Types for the info block:

- `info`
- `tip`
- `caution`
- `error`
- `danger`

```md
:::Type Title

This is the content.

:::
```

## Videos / GIF

```md
![MP4 Example](/example/example2.mp4)
```

## Youtube / Custom Svelte Component

````svelte
```svelte
<script lang="ts">
  import Youtube from '$lib/components/youtube.svelte';
  import Custom from '$custom/custom.svelte';
  const const_variable = 999;
</script>

Variable is {const_variable}

<Youtube id="ZXsQAXx_ao0" />

{(function () {
  const guess = Math.random();

  if (guess > 0.66) {
    return `<span style="color: tomato">Look at us.</span>`;
  }

  if (guess > 0.33) {
    return `<span style="color: violet">Who would have guessed?!</span>`;
  }

  return `<span style="color: goldenrod">Not me.</span>`;
})()}

<Custom name="custom object" />
```
````

## Keyboard

```md
<kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>B</kbd> <kbd>A</kbd> <kbd>Start</kbd>

<kbd>Ctl + C</kbd> <kbd>Ctl + V</kbd>
```

## Katex

### Katex Block

````tex
```math
\frac{n!}{k!(n-k)!} = \binom{n}{k}
```
````

### Katex Inline

```tex
This `$n^{22}$` and that `$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$`
```

### Chemical typesetting

````text
```math
\ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$}
```
````
