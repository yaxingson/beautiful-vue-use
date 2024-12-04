# useCopyToClipboard

Copy text to a user's clipboard.

## Demo

## Usage


```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useCopyToClipboard } from '@beautiful-vue-use/effect'

const text = ref('')
const [state, copyToClipboard] = useCopyToClipboard()

</script>

<template>
  <div>
    <input v-model.lazy="text" />
    <button type="button" @click="copyToClipboard(text)">copy text</button>
    <p v-if="state.error">Unable to copy value: {{ state.error.message }}</p>
    <p v-else-if="state.value">Copied {{ state.value }}</p>
  </div>
</template>

```

## API
