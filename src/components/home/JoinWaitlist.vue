<template>
  <div class="container">
    <div class="bg-gray-50 p-12 rounded-xl gap-12 items-center flex lg:flex-row md:flex-rwo flex-col">
      <div class="flex flex-col gap-4 flex-1">
        <span class="text-accent block leading-[20px]">{{ descText }}</span>
        <h4 class="header text-4xl text-accent lg:w-10/12 leading-[32px] md:w-10/12">{{ headerText }}</h4>
        <button class="brand-btn brand-primary w-fit" @click="$router.push('/join-waitlist')">
          {{ btnText }}
        </button>
      </div>
      <!-- <div :style="{ backgroundImage: `url(${imgUrl})` }" class="h-[150px] w-[240px] bg-cover bg-top"> -->
      <div class="lg:w-4/12 md:w-4/12 w-full">
        <img :src="imgUrl" loading='lazy' alt="" class="h-[180px] w-full object-cover object-top rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    descText: String,
    headerText: String,
    btnText: String,
    imgUrl: String
  }
}
</script>

<style></style>
