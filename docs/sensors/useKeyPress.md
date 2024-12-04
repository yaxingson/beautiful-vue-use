# useKeyPress

Detects when the user is pressing a specific key on their keyboard.

## Demo

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useKeyPress } from '@beautiful-vue-use/sensors'

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const states = []

for (const key of keys) {
  states.push(useKeyPress(key)[0])
}

</script>

<template>
  <div :style="{textAlign: 'center'}">
    Try pressing numbers
    <br />
    {{ 
      states.reduce((s, pressed, index) => {
        return s + (pressed ? (s ? ' + ' : '') + keys[index] : '')
      }, '') 
    }}
  </div>
</template>

```

## API
