<script setup>
import { provide, ref } from 'vue'
import MyNavbar from './components/MyNavbar.vue'
import MyStateComponent from './components/MyStateComponent.vue'
import MyStateComponent2 from './components/MyStateComponent2.vue'
import MyStateComponent3 from './components/MyStateComponent3.vue'

let counter = ref(10)
let incementCounter = () => {
  counter.value++
}

provide('counter', { counter, incementCounter })
</script>

<template>
  <MyNavbar />
  <MyStateComponent />
  <MyStateComponent2 />
  <MyStateComponent3 />
</template>
