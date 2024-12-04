# useScrolling

Keeps track of whether the user is scrolling or not.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useScrolling } from '@beautiful-vue-use/sensors'

const scrollRef = ref(null)
const scrolling = useScrolling(scrollRef)

</script>

<template>
  <div ref="scrollRef">
    <div>{{ scrolling ? "Scrolling" : "Not scrolling" }}</div>
  </div>
</template>

```

## API

### Declaration

```ts
declare function useScrolling(ref: Ref<HTMLElement>);

```

