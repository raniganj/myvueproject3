<script setup>
import { ref } from 'vue'
import axios from 'axios'

let post = ref()

let fetchPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/1'
  let response = await fetch(url)
  post.value = await response.json()
}

let fetchPostUsingAxios = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/2'
  let result = await axios.get(url)

  post.value = result.data
}
</script>

<template>
  <h1>Data using Fetch</h1>

  <button class="btn btn-primary me-1" @click="fetchPost()">Fetch</button>
  <button class="btn btn-primary" @click="fetchPostUsingAxios()">Fetch Post Using Axios</button>

  <h3 v-if="post">Title : {{ post?.title }}</h3>
</template>
