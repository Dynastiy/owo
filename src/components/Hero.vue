<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import RouteButton from "./RouteButton.vue";

// Import images
import hero1 from "@/assets/img/hero1.jpg";
import hero2 from "@/assets/img/hero-2.webp";
import hero3 from "@/assets/img/hero3.jpg";

// Hero slide data
const slides = [
  {
    image: hero2,
    title: "Find your match. Ignite your journey",
    description: "Connect with people and make memories.",
    buttonText: "Become a Member",
    link: "/become-a-member",
  },
  {
    image: hero1,
    title: "Find your spark. Let love Ignite",
    description: "Explore profiles and find your love story.",
    buttonText: "Become a Member",
    link: "/become-a-member",
  },

  {
    image: hero3,
    title: "Discover love. Embrace the future",
    description: "Your love story begins here.",
    buttonText: "Become a Member",
    link: "/become-a-member",
  },
];
</script>

<template>
  <div class="relative overflow-x-hidden">
    <Swiper
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      loop
      :modules="[Autoplay, Pagination]"
      class="h-full w-full"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-[100dvh]">
          <img
            class="size-full object-cover"
            :src="slide.image"
            :alt="'Hero Image ' + (index + 1)"
            loading="lazy"
          />
          <div class="bg-black h-[100dvh] w-full absolute top-0 left-0 bg-opacity-60">

          </div>
          <div
            class="absolute transform translate-x-3 translate-y-[50%] bottom-[50%] left-0 right-0 w-11/12 lg:w-[85%] mx-auto flex flex-col space-y-6 text-light"
          >
            <h1 class="text-4xl font-bold md:text-6xl w-4/5 md:w-4/5 lg:w-4/5">
              {{ slide.title }}
            </h1>
            <p>{{ slide.description }}</p>
            <RouteButton
              :text="slide.buttonText"
              :linkTo="slide.link"
              :ariaLabel="slide.buttonText"
              styles="bg-primary3 border-primary3 text-white hover:bg-transparent hover:text-primary3 hover:border-white hover:bg-white"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-pagination-bullet {
  background-color: #ccc !important;
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  background-color: #000 !important;
}
</style>