# useSlider

Provides slide behavior over any HTML element. Supports both mouse and touch events.

## Demo

## Usage


```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSlider } from '@beautiful-vue-use/ui'

const el = ref(null)
const { isSliding, value, pos, length } = useSlider(ref)

</script>

<template>
  <div>
    <div ref="el" :style="{ position: 'relative' }">
      <p :style="{ textAlign: 'center', color: isSliding ? 'red' : 'green' }">
        {{ Math.round(value * 100) }}%
      </p>
      <div :style="{ position: 'absolute', left: pos }">🎚</div>
    </div>
  </div>
</template>

```

## API
