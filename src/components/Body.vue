<template>
  <div class="container mt-8">
    <!-- About Us  -->
    <div class="mb-6">
      <h2 class="font-semibold text-2xl md:text-4xl text-primary">What We Do</h2>
      <h6 class="mb-6 text-sm lg:w-1/2">
        At Owo Progressive Union, we are dedicated to fostering unity, advocating for equity, and
        driving sustainable change in our community. Our work focuses on empowering individuals,
        uplifting families, and building a thriving, inclusive society where everyone has a voice.
      </h6>
      <div>
        <WhatWeDo />
      </div>
      <div class="mt-2 flex flex-col gap-2 items-center">
        <h6 class="mb-2 text-sm lg:w-1/2 text-center">
          Together, we work to build a stronger, more equitable community—one where progress is a
          shared journey. Join us in making a difference!
        </h6>
        <RouteButton
          text="Become a Member"
          linkTo="/become-a-member"
          ariaLabel="Become a Member"
          styles="bg-secondary border-secondary text-white hover:bg-primary hover:text-white hover:border-primary hover:bg-primary"
        />
      </div>
    </div>

    <div class="mt-6">
      <div class="flex justify-between items-center">
        <h2 class="font-semibold text-primary text-2xl md:text-4xl">Events</h2>
        <router-link to="/events" class="text-sm text-secondary font-medium">View All >></router-link>
      </div>
      <h6 class="mb-3 text-sm lg:w-1/2">
        Stay connected and get involved with our upcoming events! Whether you're looking to engage
        in meaningful discussions, volunteer for community initiatives, or simply celebrate with
        your neighbors, there's something for everyone.
      </h6>

      <div class="flex w-full md:flex-row flex-col gap-4">
        <div class="md:w-5/12">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">
            Upcoming Events
          </h2>
          <div class="mt-4 space-y-4">
            <div v-for="(item, idx) in active" :key="idx">
              <EventCard :info="item" />
            </div>
          </div>
        </div>

        <div class="flex-1">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">Past Events</h2>
          <div class="mt-4 grid grid-cols-2">
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
import WhatWeDo from './WhatWeDo.vue'
import EventCard from './EventCard.vue'
import RouteButton from './RouteButton.vue'
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
