# useBoolean

Tracks value of a boolean.

## Demo

<Demo />

## Usage

```vue
<script setup lang="ts">
import { useBoolean } from '@beautiful-vue-use/state'

const [ on, toggle ] = useBoolean(true)

</script>

<template>
  <div>
    <div>{{ on ? 'ON' : 'OFF' }}</div>
    <button @click="toggle">Toggle</button>
    <button @click="() => toggle(true)">set ON</button>
    <button @click="() => toggle(false)">set OFF</button>
  </div>
</template>

```

## API
