<script setup>
import { useDataStore } from '@/stores/datastore'
import { storeToRefs } from 'pinia'

let datastore = useDataStore()
let { message, count, cityList } = storeToRefs(datastore)
let { increment, addCity } = datastore
</script>

<template>
  <h1>My Component 3</h1>

  <h2>Message : {{ message }} {{ count }}</h2>
  <button @click="increment">Increment</button>

  <h3>City List</h3>
  <button @click="addCity()">Add City</button>
  <div v-for="(item, index) in cityList" :key="index">{{ item.name }}</div>
</template>
