# useError

Returns an error dispatcher.

## Demo

## Usage


```vue
<script setup lang="ts">
import { useError } from '@beautiful-vue-use/effect'

const dispatchError = useError()

const clickHandler = () => {
  dispatchError(new Error('Some error!'))
}

</script>

<template>
  <button @click="clickHandler">Click me to throw</button>
</template>

```

## API
