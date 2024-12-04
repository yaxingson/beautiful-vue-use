# useHash

Tracks browser's location hash.

## Demo

## Usage

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useHash } from '@beautiful-vue-use/sensors'

const { hash, setHash } = useHash()

onMounted(()=>setHash('#/path/to/page?userId=123'))

</script>

<template>
  <div>
    <div>window.location.href:</div>
    <div>
      <pre>{{ window.location.href }}</pre>
    </div>
    <div>Edit hash: </div>
    <div>
      <input :style="{ width: '100%' }" v-model="hash" />
    </div>
  </div>
</template>

```

## API
