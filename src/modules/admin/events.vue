<template>
    <div>
      <div class="text-right">
        <router-link to="/admin/event/new"
          ><button class="brand-btn-md brand-primary">Create New</button></router-link
        >
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(item, idx) in items" :key="idx" class="bg-white">
          <img :src="item.imageUrl ? item.imageUrl : $defaultImage " alt="" class="object-cover h-[140px] w-full object-center" />
          <div class="mt-1 p-2">
            <span class="block mb-1 text-xs text-secondary">{{ $formatDate(item.createdAt) }}</span>
            <h4 class="font-medium uppercase text-sm leading-tight">{{ item.title }}</h4>
          </div>
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
        this.$events.list().then((res) => {
          this.items = res
        })
      }
    },
  
    beforeMount() {
      this.fetchRecords()
    }
  }
  </script>
  
  <style></style>
  