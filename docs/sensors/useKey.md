# useKey

Executes a handler when a keyboard key is used.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useKey } from '@beautiful-vue-use/sensors'

const count = ref(0)
const increment = () => count.value += 1

useKey('ArrowUp', increment)

</script>

<template>
  <div>Press arrow up: {{ count }}</div>
</template>

```

## API
