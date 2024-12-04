# useFullscreen

Display an element full-screen, optional fallback for fullscreen video on iOS.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@beautiful-vue-use/ui'

const el = ref(null)
const show = ref(false)
const toggle = () => show.value = !show.value

const isFullscreen = useFullscreen(el, show, { onClose: () => show.value = false})

</script>

<template>
  <div ref="el" :style="{backgroundColor: 'white'}">
    <div>{{ isFullscreen ? 'Fullscreen' : 'Not fullscreen'}}</div>
    <button @click="toggle">Toggle</button>
    <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  </div>
</template>

```

## API

### Declaration

```ts
declare function useFullscreen(ref, show, {onClose})

```

### Arguments

### Returns
