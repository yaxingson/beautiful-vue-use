# usePermission

Query permission status of browser APIs.

## Demo

## Usage

```vue
<script setup lang="ts">
import { usePermission } from '@beautiful-vue-use/effect'

const state = usePermission({ name: 'microphone' })

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre>
</template>

```

## API
