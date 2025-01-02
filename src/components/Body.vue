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
      <h2 class="font-semibold text-primary text-2xl md:text-4xl">Events</h2>
      <h6 class="mb-3 text-sm lg:w-1/2">
        Stay connected and get involved with our upcoming events! Whether you're looking to engage
        in meaningful discussions, volunteer for community initiatives, or simply celebrate with
        your neighbors, there's something for everyone.
      </h6>

      <div class="flex w-full md:flex-row flex-col gap-4">
        <div class="md:w-5/12">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">Upcoming Events</h2>
          <div class="mt-4">
            <EventCard />
          </div>
        </div>

        <div class="flex-1">
          <h2 class="font-semibold text-white p-3 bg-secondary text-xl md:text-2xl">Past Events</h2>
          <div class="mt-4">
            <EventCard />
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
</script>

<style></style>
