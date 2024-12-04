<script setup lang="ts">
import useCounter from '.'

</script>

<template>
  <div>
    <div>current: 5 [min: 1; max: 10]</div>
    <br>Current value:
    <button>Increment</button>
    <button>Decrement</button>
    <button>Increment (+5)</button>
    <button>Decrement (-5)</button>
    <button>Set 100</button>
    <button>Reset</button>
    <button>Reset (25)</button>
    <br><br>Min value:<button>Increment</button><button>Decrement</button>
    <br><br>Max value:<button>Increment</button><button>Decrement</button>
    <br><br>Initial value: 5<button>Increment</button><button>Decrement</button>
  </div>
</template>

<style scoped>


</style>
