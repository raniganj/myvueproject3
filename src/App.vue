<script setup>
import MyNavbar from './components/MyNavbar.vue'
import MyDataBinding from './components/MyDataBinding.vue'
import MyEventBinding from './components/MyEventBinding.vue'
import MyReactiveBinding from './components/MyReactiveBinding.vue'
import MyReactiveList from './components/MyReactiveList.vue'
import MyFirstApi from './components/MyFirstApi.vue'
import MyAxiosApi from './components/MyAxiosApi.vue'
import MyListApi from './components/MyListApi.vue'
import MyComputedProperty from './components/MyComputedProperty.vue'
import NotFound from './components/NotFound.vue'
import { computed, ref } from 'vue'

const routes = {
  '/': MyDataBinding,
  '/event-binding': MyEventBinding,
  '/reactive-binding': MyReactiveBinding,
  '/reactive-list': MyReactiveList,
  '/first-api': MyFirstApi,
  '/axios-api': MyAxiosApi,
  '/list-api': MyListApi,
  '/computed-property': MyComputedProperty
}

const currentPath = ref(window.location.hash)

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
</script>

<template>
  <MyNavbar />

  <component :is="currentView" />
</template>
