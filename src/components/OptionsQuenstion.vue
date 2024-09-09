<script setup lang="ts">
import { defineProps, ref, watch, defineEmits } from 'vue'

// Define props
const props = defineProps({
  choice: Object,
  questionNum: Number,
  question: Object,
})

// Define emits
const emit = defineEmits(['choiceSelected'])

// Define a ref to manage the selected choice
const selectedChoice = ref<number | null>(null)

// Watch for changes in questionNum and reset the selected choice
watch(() => props.questionNum, () => {
  selectedChoice.value = null
})

const { choice } = props!

// Function to handle choice selection
const handleChoice = (correct: any) => {
  emit('choiceSelected', correct)
}


</script>

<template>
  <label @click="handleChoice(choice?.correct)" class="flex justify-between pe-20" :for="choice?.text">{{ choice?.text
    }}
    <input type="radio" v-model="selectedChoice" :id="choice?.text" :name="question?.id" :value="choice?.id" />
  </label>
</template>
