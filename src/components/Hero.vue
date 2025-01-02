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
    title: "Empowering Change Together",
    description: "Join us in creating a brighter future for our community through advocacy, development, and education. Together, we can make a difference!.",
    buttonText: "Become a Member",
    link: "/become-a-member",
  },
  {
    image: hero1,
    title: "Volunteers: The Heart of Our Mission",
    description: "Our dedicated volunteers drive the change we strive for. Be a part of something bigger—lend your time, skills, and passion to transform lives.",
    buttonText: "Volunteer Now",
    link: "/become-a-volunteer",
  },

  {
    image: hero3,
    title: "Celebrating Our Community",
    description: "From cultural festivals to development projects, we bring people together to celebrate diversity and foster unity. There's always something to be a part of!",
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
            <h1 class="text-4xl font-bold md:text-6xl w-4/5 md:w-3/5 lg:w-3/5">
              {{ slide.title }}
            </h1>
            <p class="w-w/5 md:w-3/5 lg:w-3/5">{{ slide.description }}</p>
            <RouteButton
              :text="slide.buttonText"
              :linkTo="slide.link"
              :ariaLabel="slide.buttonText"
              styles="bg-primary border-primary text-white hover:bg-transparent hover:text-primary hover:border-white hover:bg-white"
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