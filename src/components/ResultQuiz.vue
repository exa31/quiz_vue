<script setup lang="ts">
import { defineProps } from 'vue';

const { result } = defineProps<{ result: number }>()

</script>

<template>
    <div>
        <h1 class="text-4xl font-bold text-center">Result Quiz</h1>
        <div class="grid grid-cols-1 gap-4 mt-10">
            <div class="p-5 border shadow-lg">
                <div class="grid grid-cols-1 gap-4 mt-4">Nilai Kamu adalah: {{ result }}</div>
            </div>
        </div>
    </div>
</template>
