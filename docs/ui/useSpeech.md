# useSpeech

Synthesizes human voice that speaks a given string.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useSpeech } from '@beautiful-vue-use/ui'

const voices = window.speechSynthesis.getVoices()

const state = useSpeech('Hello world!', {
  rate: 0.8, 
  pitch: 0.5, 
  voice: voices[0] 
})

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre> 
</template>

```

## API
