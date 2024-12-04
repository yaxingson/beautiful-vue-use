# useIdle

Tracks if user on the page is idle.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useIdle } from '@beautiful-vue-use/sensors'

const isIdle = useIdle()

</script>

<template>
  <div>
    <div>User is idle: {{ isIdle ? 'Yes 😴' : 'Nope' }}</div>
  </div>
</template>

```

## API
