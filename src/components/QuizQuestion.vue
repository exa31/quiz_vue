<script setup lang="ts">
import OptionsQuenstion from '@/components/OptionsQuenstion.vue'
import { defineProps, defineEmits } from 'vue'

const { data, questionNum } = defineProps([
  'data',
  'questionNum'
])

const emit = defineEmits(['choiceSelected'])

const choiceSelected = (correct: boolean) => {
  if (correct) {
    emit('choiceSelected', 1)
  } else {
    emit('choiceSelected', 0)
  }
}
</script>

<template>
  <div class="p-4 border shadow-lg hover:cursor-pointer">
    <h2 class="text-xl font-semibold">{{ data.questions[questionNum].text }}</h2>
    <div class="flex flex-col">
      <OptionsQuenstion v-for="choice in data.questions[questionNum].answers" :question="data.questions[0]"
        :questionNum="questionNum" @choiceSelected="choiceSelected" :choice="choice" :key="choice.id" />
    </div>
  </div>
</template>
