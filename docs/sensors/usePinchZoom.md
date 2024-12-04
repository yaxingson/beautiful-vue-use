# usePinchZoom

Tracks the changes in pointer touch events and detects value of pinch difference 
and tell if user is zooming in or out.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePinchZoom } from '@beautiful-vue-use/sensors'

const scaleEl = ref(null)
const scale = ref(1)

const { zoomingState, pinchState } = usePinchZoom(scaleEl)

watch(zoomingState, ()=>{
  if (zoomingState === "ZOOM_IN") {
    scale.value += 0.1
  } else if (zoomingState === "ZOOM_OUT") {
    scale.value -= 0.1
  }
})

</script>

<template>
  <div ref="scaleEl">
    <img src="https://www.olympus-imaging.co.in/content/000107506.jpg"
     :style="{zoom: scale}"
    />
  </div>
</template>

```

## API
