# useMeasure

Tracks dimensions of an HTML element using the Resize [Observer API]().

## Demo

## Usage

```vue
<script setup lang="ts">
import { useMeasure } from '@beautiful-vue-use/sensors'

const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure()

</script>

<template>
  <div ref="ref">
    <div>x: {{ x }}</div>    
    <div>y: {{ y }}</div>
    <div>width: {{ width }}</div>
    <div>height: {{ height }}</div>
    <div>top: {{ top }}</div>
    <div>right: {{ right }}</div>
    <div>bottom: {{ bottom }}</div>
    <div>left: {{ left }}</div>
  </div>
</template>

```
This hook uses [ResizeObserver API](), if you want to support legacy browsers, consider installing [resize-observer-polyfill]() before running your app.

```js
if(!window.ResizeObserver) {
  window.ResizeObserver = (await import('resize-observer-polyfill')).default
}

```

## API

### Declaration

### Arguments

### Returns
