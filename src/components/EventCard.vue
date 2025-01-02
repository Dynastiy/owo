<template>
  <div>
    <div class="relative w-full h-full">
      <img
        :src="info?.imageUrl"
        class="h-44 w-full object-cover rounded-tr-md rounded-tl-md"
        alt=""
      />
      <span
        class="absolute top-2 right-2 bg-secondary items-center text-white p-2 rounded-md flex flex-col w-fit"
      >
        <span class="leading-tighter tracking-tight text-sm font-light">{{
          setMonth(info.event_date)
        }}</span>
        <span class="text-3xl tracking-tight leading-tighter font-semibold">{{ setDate(info.event_date) }}</span>
      </span>
    </div>
    <div class="bg-white p-3 flex flex-col gap-1">
      <h4 class="font-semibold text-lg">{{ info.title }}</h4>
      <h6 class="flex gap-1">
        <Icon icon="mdi:location" class="text-primary" /> {{ info.location }}
      </h6>
      <RouteButton
        text="View More"
        :linkTo="`/event/${info.slug}`"
        ariaLabel="View More"
        styles="bg-primary border-primary text-sm text-white hover:bg-secondary hover:text-secondary hover:border-secondary hover:bg-white"
      />
    </div>
  </div>
</template>

<script setup>
import RouteButton from '@/components/RouteButton.vue'
import { Icon } from '@iconify/vue'
const props = defineProps({
  info: {
    type: Object,
    default: () => {}
  }
})

const setMonth = (value) => {
  const month = new Date(value).toLocaleString('default', { month: 'short' })
  return month
}

const setDate = (value) => {
  const date = new Date(value).toLocaleString('default', { day: 'numeric' })
  return date
}

// import { computed } from 'vue'

// const thisYear = computed(() => {
//   const yearToday = new Date().getFullYear()
//   return yearToday
// })
</script>

<style>
/* styles */
</style>
