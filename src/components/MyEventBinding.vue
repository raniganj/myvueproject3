<script setup>
let counter = 10
function increment() {
  alert()
}
</script>

<template>
  <h1>Event Binding check</h1>
  <h2>counter : {{ counter }}</h2>
  <button class="btn btn-info" @click="increment">Increment</button>
</template>
