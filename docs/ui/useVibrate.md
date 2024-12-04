# useVibrate

Provide physical feedback with device vibration hardware using the [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API).

## Demo

## Usage


```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useVibrate } from '@beautiful-vue-use/ui'

const vibrating = ref(false)
const toggleVibrating = () => vibrating.value = !vibrating.value

useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], false)

</script>

<template>
  <div>
    <button @click="toggleVibrating">{{ vibrating ? 'Stop' : 'Vibrate' }}</button>
  </div>
</template>

```

## API

### Declaration

```ts
declare function useVibrate(
  enabled: boolean = true,
  pattern: number | number[] = [1000, 1000],
  loop: boolean = true
): void;

```
