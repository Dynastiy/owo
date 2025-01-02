<template>
  <div class="container mt-8">
    <div class="mt-6">
      <h2 class="font-semibold text-primary text-2xl md:text-4xl">Events</h2>
      <h6 class="mb-3 text-sm lg:w-1/2">
        Stay connected and get involved with our upcoming events! Whether you're looking to engage
        in meaningful discussions, volunteer for community initiatives, or simply celebrate with
        your neighbors, there's something for everyone.
      </h6>

      <div class="space-y-4">
        <div class="">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">
            Upcoming Events
          </h2>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div v-for="(item, idx) in active" :key="idx">
              <EventCard :info="item" />
            </div>
          </div>
        </div>

        <div class="">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">Past Events</h2>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div v-for="(item, idx) in past_events" :key="idx">
              <EventCard :info="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import events from '@/services/events'

import { ref, onMounted } from 'vue'

let active = ref([])
let past_events = ref([])

const fetchRecords = async () => {
  events.list().then((res) => {
    console.log(res)
    active.value = res.filter((item) => formatDate(item.event_date) >= 0)
    past_events.value = res.filter((item) => formatDate(item.event_date) < 0)
  })
}

const formatDate = (dateString) => {
  const currentDate = new Date()
  // const formattedDate = currentDate.toISOString().split('T')[0] // Extract YYYY-MM-DD
  const currentDateUnix = currentDate.getTime()

  // Convert the date string to a Date object
  const dateObject = new Date(dateString)
  // Get the milliseconds since the Unix epoch
  const milliseconds = dateObject.getTime()

  const dateDifference = milliseconds - currentDateUnix
  return dateDifference
}

onMounted(() => {
  fetchRecords()
})
</script>

<style></style>
