<script setup lang="ts">
import QuizQueestion from '@/components/QuizQuestion.vue'
import JsonData from '../../data/data.json'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
const route = useRoute()
const router = useRouter()
const data = JsonData.filter((data) => data.id === Number(route.params.id))[0]
const correctAnswer = ref(0)
const questionNum = ref<number>(0)
const finish = ref(false)

const handleNextQuestion = () => {
  questionNum.value++
}
const handleFinish = () => {
  finish.value = true
}
const handleBack = () => {
  if (questionNum.value === 0) {
    return router.back()
  }
  questionNum.value--
}

const handleProgress = computed((): number => {
  return ((questionNum.value + 1) / data.questions.length) * 100
})

const handleChoice = (correct: number) => {
  correctAnswer.value += correct
}

// jadi lanjut mem implementasikan logic untuk menampilkan handlenya
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center ">Question {{ data.title }}</h1>
    <div class="w-full h-full my-5 ">
      <header class="text-center ">{{ questionNum + 1 }}/{{ data.questions.length }}</header>
      <div class="w-full h-full mt-5 border">
        <div :style="{ width: `${handleProgress}%` }" class="h-8 bg-green-300 "></div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full gap-4" v-if="finish">
      <h3>Score {{ correctAnswer }}/{{ data.questions.length }}</h3>
      <router-link to="/" class="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700">
        Back
      </router-link>
    </div>
    <div v-if="!finish">
      <div class="grid grid-cols-1 gap-4 my-20">
        <div class="p-5 border shadow-lg">
          <div class="grid grid-cols-1 gap-4 mt-4">
            <QuizQueestion :data="data" :questionNum="questionNum" @choiceSelected="handleChoice" />
          </div>
        </div>
      </div>
      <div class="flex justify-between gap-4 mt-5">
        <button @click="handleBack" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Back
        </button>
        <button @click="handleFinish" v-if="questionNum + 1 === data.questions.length"
          class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Finish
        </button>
        <button @click="handleNextQuestion"
          v-if="questionNum < data.questions.length && questionNum + 1 !== data.questions.length"
          class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
