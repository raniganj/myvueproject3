<script setup>
import { inject } from 'vue'

let { counter } = inject('counter')
</script>
<template>
  <h1>State Component 2</h1>
  <p>Counter : {{ counter }}</p>
</template>
