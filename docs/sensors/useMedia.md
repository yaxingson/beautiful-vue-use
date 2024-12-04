# useMedia

Tracks state of a CSS media query.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useMedia } from '@beautiful-vue-use/sensors'

const isWide = useMedia('(min-width: 480px)')

</script>

<template>
  <div>Screen is wide: {{ isWide ? 'Yes' : 'No' }}</div>
</template>

```

## API

### Declaration

```ts
declare function useMedia(query: string, defaultState: boolean=false): boolean;

```
