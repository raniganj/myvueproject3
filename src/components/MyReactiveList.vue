<script setup>
import { ref } from 'vue'

let city = ref('')
let cityList = ref(['Delhi', 'Mumbai'])

let addNew = () => {
  if (!city.value) return
  cityList.value.unshift(city.value)
  city.value = ''
}
</script>

<template>
  <h1>Reactive List</h1>

  <input type="text" placeholder="city" v-model="city" />
  <button class="btn btn-info ms-1" @click="addNew()">Add New</button>

  <div v-for="item in cityList" :key="item">{{ item }}</div>
</template>
