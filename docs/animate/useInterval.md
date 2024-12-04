---
category: Animate
---

# useInterval

## Demo


## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useInterval } from '@beautiful-vue-use/animate'

const delay = ref(1000)
const count = ref(0)
const isRunning = ref(true)

const toggleIsRunning = () => isRunning.value = !isRunning.value

useInterval(()=>count.value+=1, isRunning.value ? delay : null)

</script>

<template>
  <div>
    <div>
      delay: <input v-model="delay"/>
    </div>
    <h1>count: {{ count }}</h1>
    <div>
      <button @click="toggleIsRunning">{{ isRunning ? 'stop' : 'start' }}</button>
    </div>
  </div>
</template>

```

## API

### Declaration

```ts
declare function useInterval(callback:Function, delay?: number)

```

### Arguments

| name | description | type | required | default |
| ----- | -----  | -----  | -----  | -----  |
| callback |
| delay |

### Returns
