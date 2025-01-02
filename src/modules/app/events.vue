<template>
  <div class="container my-4">
    <h3 class="font-bold text-4xl mb-3">Blog</h3>
    <div class="flex lg:flex-row md:flex-row flex-col-reverse gap-6">
      <div class="flex flex-col gap-6 flex-1">
        <div v-for="(item, idx) in items" :key="idx" class="bg-white">
          <span class="block mb-1 text-xs text-neutral-500 ">{{ $formatDate(item.createdAt) }}</span>
            <h4 class="font-medium text-xl mb-3 leading-tight uppercase">{{ item.title }}</h4>
          <img
            :src="item.imageUrl ? item.imageUrl : $defaultImage"
            alt=""
            class="object-cover h-[250px] w-full object-center"
          />
          <div class="mt-1">
            <!-- <h4 class="text-sm leading-tight">{{ item.content }}</h4> -->
            <div v-html="truncateHtmlContent(item.content, 350)" class="text-sm">

            </div>
            <router-link :to="`/news/${item.slug}`"><button class="brand-btn-md brand-primary mt-2">Read More</button></router-link>
          </div>
        </div>
      </div>
      <div class="lg:w-[300px] md:w-[250px] w-full">
        <h4 class="bg-secondary p-2 text-white font-semibold text-2xl">Categories</h4>
        <ol class="px-8 py-4 flex flex-col gap-2 bg-neutral-100">
          <li role="button">Events</li>
          <li role="button">News</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },

  methods: {
    fetchRecords() {
      this.$news.list().then((res) => {
        this.items = res
      })
    },

    truncateHtmlContent(content, length) {
        // Optional: sanitize the content here if needed for security.
        const plainText = content.replace(/<[^>]+>/g, ''); // Strips HTML tags
        return plainText.slice(0, length)+'...';
    },
  },

  beforeMount() {
    this.fetchRecords()
  }
}
</script>

<style>
ol li {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M13 16.25a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l3-3l-3-3A.75.75 0 0 1 13.53 8l3.5 3.5a.75.75 0 0 1 0 1.06L13.53 16a.74.74 0 0 1-.53.25m-5.5 0A.74.74 0 0 1 7 16a.75.75 0 0 1 0-1l3-3l-3-3a.75.75 0 0 1 1-1l3.5 3.5a.75.75 0 0 1 0 1.06L8 16a.74.74 0 0 1-.5.25'/%3E%3C/svg%3E") !important;;
  /* list-style-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M13 16.25a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l3-3l-3-3A.75.75 0 0 1 13.53 8l3.5 3.5a.75.75 0 0 1 0 1.06L13.53 16a.74.74 0 0 1-.53.25m-5.5 0A.74.74 0 0 1 7 16a.75.75 0 0 1 0-1l3-3l-3-3a.75.75 0 0 1 1-1l3.5 3.5a.75.75 0 0 1 0 1.06L8 16a.74.74 0 0 1-.5.25'/%3E%3C/svg%3E") !important; */
}
</style>
