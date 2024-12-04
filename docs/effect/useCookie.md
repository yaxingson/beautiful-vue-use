# useCookie

Returns the current value of a cookie, a callback to update the cookie and a callback to delete the cookie.

## Demo

## Usage


```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCookie } from '@beautiful-vue-use/effect'

const count = ref(1)
const [value, updateCookie, deleteCookie] = useCookie("my-cookie")

onMounted(() => deleteCookie())

const updateCookieHandler = () => {
  updateCookie(`my-awesome-cookie-${count}`)
  count.value += 1
}

</script>

<template>
  <div>
    <p>Value: {{ value }}</p>
    <button @click="updateCookieHandler">Update Cookie</button>
    <br />
    <button @click="deleteCookie">Delete Cookie</button>
  </div>
</template>

```

## API
