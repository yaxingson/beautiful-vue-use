# useMotion

Uses device's acceleration sensor to track its motions.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useMotion } from '@beautiful-vue-use/sensors'

const state = useMotion()

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre>
</template>

```

## API
