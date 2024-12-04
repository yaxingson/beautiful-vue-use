# useCss

Change CSS dynamically. Works like `virtual CSS` — it re-renders only CSS rules that change. It is different from inline styles, because you can use media queries and pseudo selectors.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useCss } from '@beautiful-vue-use/ui'

const className = useCss({
  color: 'red',
  border: '1px solid red',
  '&:hover': {
    color: 'blue',
  },
})

</script>

<template>
  <div :class="className">Hover me!</div>
</template>

```

## API

### Declaration

```ts


```

### Arguments

### Returns
