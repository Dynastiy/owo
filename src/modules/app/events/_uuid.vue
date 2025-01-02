<template>
    <div class="container my-4">
      <h4 class="font-semibold text-2xl leading-tight">{{ item.title }}</h4>
      <h4 class="font-medium text-sm mt-1 text-neutral-500 leading-tight">{{ item.location }}</h4>
      <span class="block mt-2 text-xs text-secondary">{{ $formatDate(item.event_date) }}</span>
  
      <img
        :src="item.imageUrl ? item.imageUrl : $defaultImage"
        alt=""
        class="object-cover lg:h-[350px] md:h-[300px] h-[250px] w-full object-center mt-3"
      />
      <div class="mt-1">
        <!-- <h4 class="font-medium text-sm leading-tight">{{ item.sub_title }}</h4> -->
        <div v-html="item.description"></div>
        <a v-if="item.link" target="_blank" class="underline" :href="item.link">Click Here to register for this event</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slug: this.$route.params.slug,
        item: {}
      }
    },
  
    methods: {
      getRecord() {
        this.$config.getRecord('events', 'slug', this.slug).then((res) => {
          console.log(res)
          this.item = res
        })
      }
    },
  
    beforeMount() {
      this.getRecord()
    }
  }
  </script>
  
  <style></style>
  