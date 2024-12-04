# useLocalStorage

Manages a single localStorage key.

## Demo

## Usage


```vue
<script setup lang="ts">
import { useLocalStorage } from '@beautiful-vue-use/effect'

const [value, setValue, remove] = useLocalStorage('my-key', 'foo')

</script>

<template>
  <div>
    <div>Value: {{ value }}</div>
    <button @click="setValue('bar')">bar</button>
    <button @click="setValue('baz')">baz</button>
    <button @click="remove">Remove</button>
  </div>
</template>

```

## API
