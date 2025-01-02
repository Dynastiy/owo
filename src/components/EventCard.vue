<template>
  <div>
    <div class="relative w-full h-full ">
      <img src="@/assets/img/hero1.jpg" class="h-44 w-full object-cover rounded-tr-md rounded-tl-md" alt="" />
      <span class=" absolute  top-2 right-2 bg-secondary items-center text-white p-2 rounded-md flex flex-col w-fit">
        <span class="leading-tight tracking-tight text-sm font-light">Nov</span>
        <span class="text-3xl tracking-tight font-semibold">23</span>
      </span>
    </div>
    <div class="bg-white p-3">
      <h4>This is the event header</h4>
      <h6>Event Location</h6>
      <button>View More</button>
    </div>
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
