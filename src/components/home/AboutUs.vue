<template>
  <section class="about-us py-12">
    <div class="container">
      <!-- <h1 class="font-bold text-4xl text-center ">About Us</h1> -->
      <div class="lg:w-9/12 md:w-9/12 w-full mx-auto">
        <h1 class="lg:text-4xl md:text-3xl text-center text-3xl header">What We Offer</h1>
        <h5 class="text-center text-sm text-center">
          {{ aboutDesc }}
        </h5>
        <span class="block text-sm text-center"><b>{{aboutSpan}}</b></span>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
    aboutHeader: String,
    aboutDesc: String,
    aboutSpan: String
  },
  data() {
    return {
     
    }
  }
}
</script>

<style></style>
