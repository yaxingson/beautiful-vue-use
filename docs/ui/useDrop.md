# useDrop

Tracks events for the whole page on file, link drop and copy-paste.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useDrop } from '@beautiful-vue-use/ui'

const state = useDrop({
  onFiles: files => console.log('files', files),
  onUri: uri => console.log('uri', uri),
  onText: text => console.log('text', text),
})

</script>

<template>
  <div>Drop something on the page.</div>
</template>

```

## API
