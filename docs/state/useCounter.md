# useCounter

Tracks a numeric value.

## Demo

<Demo />

## Usage

```vue
<script setup lang="ts">
import { useCounter } from '@beautiful-vue-use/state'

const [min, { inc: incMin, dec: decMin }] = useCounter(1)
const [max, { inc: incMax, dec: decMax }] = useCounter(10)
const [value, { inc, dec, set, reset }] = useCounter(5, max, min)

</script>

<template>
  <div>
    <div>
      current: {{ value }} [min: {{ min }}; max: {{ max }}]
    </div>

    <br />
    Current value: <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
    <button @click="() => inc(5)">Increment (+5)</button>
    <button @click="() => dec(5)">Decrement (-5)</button>
    <button @click="() => set(100)">Set 100</button>
    <button @click="() => reset()">Reset</button>
    <button @click="() => reset(25)">Reset (25)</button>

    <br />
    <br />
    Min value:
    <button @click="() => incMin()">Increment</button>
    <button @click="() => decMin()">Decrement</button>

    <br />
    <br />
    Max value:
    <button @click="() => incMax()">Increment</button>
    <button @click="() => decMax()">Decrement</button>
  </div>
</template>

```

## API
