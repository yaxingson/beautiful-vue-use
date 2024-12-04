# useMediaDevices

Tracks connected hardware devices.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useMediaDevices } from '@beautiful-vue-use/sensors'

const state = useMediaDevices()

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre>
</template>

```

## API
