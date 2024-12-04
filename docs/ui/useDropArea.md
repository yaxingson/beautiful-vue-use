# useDropArea

Tracks events for a specific element on file, link drop and copy-paste.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useDropArea } from '@beautiful-vue-use/ui'

const { bond, state } = useDropArea({
  onFiles: files => console.log('files', files),
  onUri: uri => console.log('uri', uri),
  onText: text => console.log('text', text),
})

</script>

<template>
  <div v-bind="bound">Drop something here.</div>
</template>

```

## API
