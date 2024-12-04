# useWindowSize

Tracks dimensions of the browser window.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useWindowSize } from '@beautiful-vue-use/sensors'

const { width, height } = useWindowSize()

</script>

<template>
  <div>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
  </div>
</template>

```

## API
