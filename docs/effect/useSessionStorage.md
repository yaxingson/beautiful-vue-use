# useSessionStorage

Manages a single sessionStorage key.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useSessionStorage } from '@beautiful-vue-use/effect'

const [value, setValue] = useSessionStorage('my-key', 'foo')

</script>

<template>
  <div>
    <div>Value: {{ value }}</div>
    <button @click="setValue('bar')">bar</button>
    <button @click="setValue('baz')">baz</button>
  </div>
</template>

```

## API

### Declaration

```ts
declare function useSessionStorage(key:string, initialValue:unknown='', raw:boolean=false);

```

### Arguments


