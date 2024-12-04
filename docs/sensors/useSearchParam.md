# useSearchParam

Tracks browser's location search param.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useSearchParam } from '@beautiful-vue-use/sensors'

function changeSearchParam(value) {
  history.pushState({}, '', location.pathname + value ? `?edit=${value}` : '')
}

const edit = useSearchParam('edit')

</script>

<template>
   <div>
    <div>edit: {{ edit || '🤷‍♂️' }}</div>
    <div>
      <button @click="changeSearchParam(123)">Edit post 123 (?edit=123)</button>
    </div>
    <div>
    <button @click="changeSearchParam(999)">Edit post 999 (?edit=999)</button>
    </div>
    <div>
      <button @click="changeSearchParam">Close modal</button>
    </div>
  </div>
</template>

```

## API
