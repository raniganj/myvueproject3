<script setup>
import { inject } from 'vue'

let { counter, incementCounter } = inject('counter')
</script>
<template>
  <h1>State Component 1</h1>
  <p>Counter : {{ counter }}</p>

  <button @click="incementCounter">Increment</button>
</template>
