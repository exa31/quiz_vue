<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { data } = defineProps(['data'])

// const quiz = ref<Data>(props.data)
</script>

<template>
  <div
    @click="router.push(`/quiz/${data.id}`)"
    class="p-5 m-4 border shadow-lg hover:cursor-pointer"
  >
    <img class="w-96" :src="data.img" alt="img" />
    <h2 class="text-xl font-semibold">{{ data.title }}</h2>
    <p>{{ data.questions.length }} Question</p>
  </div>
</template>
