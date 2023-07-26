<script setup>
import MyAxiosApi from '@/components/MyAxiosApi.vue'
import MyFirstApi from '@/components/MyFirstApi.vue'
import { ref } from 'vue'

let toggleStatus = ref(true)
</script>

<template>
  <button class="btn btn-light" @click="toggleStatus = !toggleStatus">Toggle</button>
  <component :is="toggleStatus ? MyAxiosApi : MyFirstApi"></component>
</template>
