<template>
  <div class="bg-secondary mt-6 p-6">
    <!-- template content -->
    <h6 class="text-white text-center text-sm">
      Owo Concerned Progreesive Forum © {{thisYear}} All Rights Reserved
    </h6>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const thisYear = computed(() => {
  const yearToday = new Date().getFullYear()
  return yearToday
})
</script>

<style>
/* styles */
</style>
