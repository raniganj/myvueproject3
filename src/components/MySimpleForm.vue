<script setup>
import { ref } from 'vue'

let username = ref('')

let save = () => {
  alert(username.value)
  username.value = ''
}
</script>

<template>
  <h1>Simple Form</h1>

  <input type="text" placeholder="username" v-model="username" />

  <button class="btn btn-info" @click="save()">Save</button>
</template>
