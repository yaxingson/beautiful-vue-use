# useDefault

Returns the default value when state is null or undefined.

## Demo

## Usage

```vue
<script setup lang="ts">
import { useDefault } from '@beautiful-vue-use/state'

const initialUser = { name: 'Marshall' }
const defaultUser = { name: 'Mathers' }
const [user, setUser] = useDefault(defaultUser, initialUser)

</script>

<template>
  <div>
    <div>User: {{ user.name }}</div>
    <input @change="e => setUser({ name: e.target.value })" />
    <button @click="() => setUser(null)">set to null</button>
  </div>
</template>

```

## API
