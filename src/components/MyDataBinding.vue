<script setup>
let myId = 'myId'
let counter = 10
let name = 'Hello Vue'
let status = true
let user = {
  name: 'Sunil',
  counter: 5,
  status: true
}
</script>

<template>
  <h1 :id="myId">Counter : {{ counter }}</h1>
  <h1 :name="myId">name : {{ name }}</h1>
  <h1 :status="myId">status : {{ status }}</h1>
  <hr />
  <h1>User name : {{ user?.name }}</h1>
  <h1>User Counter : {{ user?.counter }}</h1>
  <h1>User status : {{ user?.status }}</h1>
</template>
