# useNetworkState

Tracks the state of browser's network connection.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useNetworkState } from '@beautiful-vue-use/sensors'

const state = useNetworkState()

</script>

<template>
  <pre>{{ JSON.stringify(state, null, 2) }}</pre>
</template>

```

## API

### Declaration

```ts
interface IUseNetworkState {
  online?: boolean
  previous?: boolean
  since?: Date
  downlink?: number
  downlinkMax?: number
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
  rtt?: number
  saveData?: boolean
  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown'
}

declare function useNetworkState(initialState?: IUseNetworkState | (() => IUseNetworkState)): IUseNetworkState;

```

### Arguments

### Returns

