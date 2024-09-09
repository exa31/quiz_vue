<script setup lang="ts">
import { ref, watch } from 'vue'
import JsonData from '../../data/data.json'
import QuizCard from '../components/QuizCard.vue'

interface Data {
  id: number
  img: string
  title: string
  questions: any
}

const datas = ref<Data[]>(JsonData)
const search = ref('')

watch(search, (value) => {
  // kenapa kalo kosong balik ke semula karena ini sama seperti hit db dengan filter di db data ga hilang hanya kita memanipulasi responnya kemudian saat kosong itu sama saja dengan hit db dengan filter kosong
  return (datas.value = JsonData.filter((data) =>
    data.title.toLowerCase().includes(value.toLowerCase())
  ))
})

// fetch('../data/data.json')
//   .then((response) => response.json())
//   .then((json) => {
//     datas.value = json
//   })
//   .catch((error) => console.error(error))
</script>

<template>
  <header class="flex gap-6 mb-6">
    <h1 class="text-3xl font-bold">Quizes</h1>
    <input
      v-model.trim="search"
      type="text"
      class="px-4 border rounded-lg bg-stone-200"
      placeholder="Search"
    />
  </header>
  <div class="grid grid-cols-3">
    <QuizCard v-for="data in datas" :key="data.id" :data="data" />
  </div>
</template>
