# useGeolocation

Tracks user's geographic location.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useGeolocation } from '@beautiful-vue-use/sensors'

const state = useGeolocation()

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre>
</template>

```

## API
