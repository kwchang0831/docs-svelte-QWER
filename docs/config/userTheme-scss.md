---
title: user/config/userTheme.scss
---

# userTheme.scss

If you would like to customize some of the styles, check out the `src/lib/styles/defaultTheme.scss`. Copy and paste content of it to `user/config/userTheme.scss` and overwrite the variable with your perferences.

## Example

For example, if we only want to change the backgroud color and text color of body. You don't necessary need to include all the variables. But, you have to maintain the level strucutre of the variables.

Here is the example code of userTheme.scss where I change the background color to red and text color to yellow.

```scss
:root {
  --qwer-bg-color: red;
  --qwer-text-color: yellow;
}
```
