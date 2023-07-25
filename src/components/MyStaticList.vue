<script setup>
let cityList = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai']
</script>

<template>
  <h1>Static List</h1>
  <div>{{ cityList }}</div>
  <h3 v-for="(item, index) in cityList" :key="index">{{ item }}</h3>
</template>
