# useClickAway

Triggers a callback when user clicks outside the target element.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useClickAway } from '@beautiful-vue-use/ui'

const el = ref(null)

useClickAway(ref, () => {
  console.log('OUTSIDE CLICKED')
})

</script>

<template>
  <div ref="el" :style="{ width:'200px', height:'200px', background:'red' }"></div>
</template>

```

## API

### Declaration

```ts
declare function useClickAway()

```

### Arguments

### Returns
