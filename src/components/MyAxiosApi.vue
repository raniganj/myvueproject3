<script setup>
import { ref } from 'vue'

let post = ref()

let fetchPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/1'
  let response = await fetch(url)
  post.value = await response.json()
}
</script>

<template>
  <h1>Data using Fetch</h1>

  <button class="btn btn-primary" @click="fetchPost()">Fetch</button>

  <h3 v-if="post">Title : {{ post?.title }}</h3>
</template>
