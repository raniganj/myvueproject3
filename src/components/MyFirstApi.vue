<script setup>
import { ref } from 'vue'

let post = ref()

let getPost = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  post.value = await response.json()
}
</script>

<template>
  <h1>First API call</h1>

  <button class="btn btn-info" @click="getPost">Get Post</button>

  <div>{{ post }}</div>

  <div>{{ post?.title }}</div>
</template>
