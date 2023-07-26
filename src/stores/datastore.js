import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const message = ref('Hello Vue')
  const count = ref(10)

  let cityList = ref([
    { id: crypto.randomUUID(), name: 'Delhi' },
    { id: crypto.randomUUID(), name: 'Mumbai' }
  ])

  let increment = () => {
    count.value++
  }

  let addCity = () => {
    let city = { id: crypto.randomUUID(), name: 'Kolkata' }

    cityList.value.unshift(city)
  }

  return { message, cityList, count, increment, addCity }
})
