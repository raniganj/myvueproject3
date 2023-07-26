<script setup>
import { computed, ref } from 'vue'

let count = ref(10)
let computedCount = computed(() => {
  return count.value * 2
})

let doubleCount = () => {
  return count.value * 2
}
</script>

<template>
  <h1>My Computed Property</h1>
  <h3>Count : {{ count }}</h3>
  <h3>Double : {{ doubleCount() }}</h3>
  <h3>Computed Count : {{ computedCount }}</h3>

  <button @click="count++">Increment</button>
</template>
