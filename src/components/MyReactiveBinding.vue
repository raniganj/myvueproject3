<script setup>
import { ref } from 'vue'

let counter = ref(10)

let increment = () => {
  counter.value++
}
let decrement = () => {
  counter.value--
}
</script>

<template>
  <h1>Reactive Binding</h1>

  <h2>Counter : {{ counter }}</h2>

  <button class="btn btn-info" @click="counter++">Increment</button>
  <button class="btn btn-dark ms-1" @click="counter--">decrement</button>
  <hr />
  <button class="btn btn-info" @click="increment()">Increment</button>
  <button class="btn btn-dark ms-1" @click="decrement()">decrement</button>
</template>
