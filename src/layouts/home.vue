<template>
  <div class="flex flex-col min-h-screen">
    <app-header :menu="menu" />
    <div class="flex-1">
      <slot />
    </div>
    <app-footer :menu="menu"/>
  </div>
</template>

<script>
import menu from '@/api/menuItems'
import AppHeader from '@/components/navigation/AppHeader.vue'
import AppFooter from '@/components/navigation/Footer.vue'
export default {
  components: { AppHeader, AppFooter },
  data(){
    return {
      menu
    }
  }
}
</script>

<style>

</style>
