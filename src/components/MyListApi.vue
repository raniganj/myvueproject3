<script setup>
import { onMounted, ref } from 'vue'

let postList = ref()

onMounted(() => {
  getPost()
})

let getPost = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  postList.value = await response.json()
}
</script>

<template>
  <h1>Get All Post</h1>

  <button class="btn btn-info" @click="getPost">Get Post</button>

  <div v-for="(item, index) in postList" :key="index">{{ item?.title }}</div>
</template>
