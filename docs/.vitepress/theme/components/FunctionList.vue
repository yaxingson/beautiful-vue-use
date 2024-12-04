<script setup lang="ts">
import { categoryNames, functions } from '../../../metadata'

console.log(functions)


</script>

<template>
  <div>
    <button v-for="name in categoryNames" :key="name">{{ name }}</button>
  </div>
  <div v-for="name in categoryNames" :key="name">
    <h3>{{ name }}</h3>
    <ul>
      <li v-for="item in functions.filter(fn=>fn.category===name)" :key="item.name">
        <a>{{ item.name }}</a> - {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>


</style>
