<template>
  <div class="hero-section bg-gray-50">
    <carousel :imagesProps="images" />
    <main class="container gap-4 py-12 flex lg:flex-row md:flex-row flex-col items-center gap-4">
      <section class="flex flex-col gap-4 lg:w-10/12 md:w-10/12 w-full">
        <h1 class="text-5xl leading-[42px] header text-deep">{{ heroHeader }}</h1>
        <h6 class="leading-[23px]">
          {{ heroDesc }}
        </h6>
        <button class="brand-btn brand-primary w-fit" @click="$router.push('/join-waitlist')">
          Get Early Access
        </button>
      </section>

      <div class="w-full">
        <img loading="lazy" :src="heroImg" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
import carousel from '../UI/carousel.vue'
export default {
  components: { carousel },
  props: {
    heroHeader: String,
    heroDesc: String,
    heroImg: String
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s'
        },
        {
          id: 3,
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s'
        }
      ]
    }
  }
}
</script>

<style></style>
