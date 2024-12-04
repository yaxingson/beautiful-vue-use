# useScratch

Tracks state of mouse "scrubs" (or "scratches").

## Demo

## Usage

```vue
<script setup lang="ts">
import { useScratch } from '@beautiful-vue-use/sensors'

const blockStyle = {
  position: 'relative',
  width: 400,
  height: 400,
  border: '1px solid tomato',
}

const preStyle = {
  pointerEvents: 'none',
  userSelect: 'none',
}

const rectangleStyle = {
  position: 'absolute',
  left: x,
  top: y,
  width: dx,
  height: dy,
  border: '1px solid tomato',
  pointerEvents: 'none',
  userSelect: 'none',
}

const [ref, state] = useScratch()

let { x = 0, y = 0, dx = 0, dy = 0 } = state
if (dx < 0) [x, dx] = [x + dx, -dx]
if (dy < 0) [y, dy] = [y + dy, -dy]

</script>

<template>
  <div ref="ref" :style="blockStyle">
    <pre :style="preStyle">{{ JSON.stringify(state, null, 4) }}</pre>
    <div v-show="state.isScratching" :style="rectangleStyle" />
  </div>
</template>

```

## API

### Declaration

```ts
interface ScratchSensorState {
  isScratching: boolean;
  start?: number;
  end?: number;
  x?: number;
  y?: number;
  dx?: number;
  dy?: number;
  docX?: number;
  docY?: number;
  posX?: number;
  posY?: number;
  elH?: number;
  elW?: number;
  elX?: number;
  elY?: number;
}

declare function useScratch():[ref, ScratchSensorState]

```

