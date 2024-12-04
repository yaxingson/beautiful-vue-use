# useAsync

Resolves an async function or a function that returns a promise.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useAsync } from '@beautiful-vue-use/effect'

const url = ref('')
const state = useAsync(async () => {
  const response = await fetch(url)
  const result = await response.text()
  return result
}, [ url ])

</script>

<template>
  <div>
    <div v-if="state.loading">Loading ...</div>
    <div v-else-if="state.error">Error: {{ state.error.message }}</div>
    <div v-else>Value: {{ state.value }}</div>
  </div>
</template>

```

## API
