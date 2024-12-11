<template>
  <div>
    <footer class="site-footer container bg-white mt-12">
      <div class="mb-12">
        <div class="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-2 gap-8">
          <div class="">
            <h6 class="text-accent font-semibold mb-2 text-lg whitespace-nowrap">Quick Links</h6>
            <ul class="flex flex-col gap-1">
              <li
                class="capitalize text-bodyText text-sm font-medium"
                v-for="item in ['buy_coins', 'sell_coins', 'deposit', 'exchange']"
                :key="item"
              >
                {{ item.split('_').join(' ') }}
              </li>
            </ul>
          </div>

          <!-- <div class="">
            <h6 class="text-accent font-semibold mb-2 text-lg whitespace-nowrap">Smileswap Benefits</h6>
            <ul class="flex flex-col gap-1">
              <li
                class="capitalize text-bodyText text-sm font-medium"
                v-for="item in [
                  'fast_transactions',
                  'secure_platforms',
                  'hassle-Free_experience',
                  '24/7_customer_support'
                ]"
                :key="item"
              >
                {{ item.split('_').join(' ') }}
              </li>
            </ul>
          </div> -->

          <div class="">
            <h6 class="text-accent font-semibold mb-2 text-lg whitespace-nowrap">Support</h6>
            <ul class="flex flex-col gap-1">
              <li
                class="capitalize text-bodyText text-sm font-medium"
                v-for="item in ['give_us_feedback', 'help_center', 'live_chat']"
                :key="item"
              >
                {{ item.split('_').join(' ') }}
              </li>
            </ul>
          </div>

          <div class="">
            <h6 class="text-accent font-semibold mb-2 text-lg whitespace-nowrap">Resources</h6>
            <ul class="flex flex-col gap-1">
              <li
                class="capitalize text-bodyText text-sm font-medium"
                v-for="item in ['FAQ', 'blog']"
                :key="item"
              >
                {{ item.split('_').join(' ') }}
              </li>
            </ul>
          </div>

          <!-- <div class="">
            <h6 class="text-accent font-semibold mb-2 text-lg whitespace-nowrap">Contact</h6>
            <ul class="flex flex-col gap-1">
              <li class="text-bodyText text-sm font-medium">support@smileswap.com</li>
              <li class="text-bodyText text-sm font-medium">
                1234 Elm Street <br />
                San Francisco, CA 94109 <br />
                United States
              </li>
            </ul>
          </div> -->
        </div>
      </div>

      <hr class="my-3" />

      <div class="flex lg:flex-row md:flex-row flex-col justify-between gap-2 py-3">
        <p class="text-bodyText text-sm font-medium flex gap-2 items-center">
          <img src="@/assets/img/flag.png" class="rounded-full w-5" alt="" />
          Nigeria.
        </p>

        <ul class="flex gap-3">
          <li
            class="capitalize text-bodyText text-sm font-medium"
            v-for="item in ['twitter', 'instagram', 'facebook', 'linkedIn']"
            :key="item"
          >
            {{ item.split('_').join(' ') }}
          </li>
        </ul>
      </div>

      <hr class="my-3" />

      <div class="flex lg:flex-row md:flex-row flex-col justify-between gap-2 pt-3 pb-4">
        <p class="text-bodyText text-sm font-medium">
          &copy; {{ thisYear }} Smileswap. All rights reserved.
        </p>

        <ul class="flex gap-3">
          <li
            class="capitalize text-bodyText text-sm font-medium"
            v-for="item in ['privacy_policy', 'terms_of_use', 'cookie_policy']"
            :key="item"
          >
            {{ item.split('_').join(' ') }}
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<!-- <script
import { computed } from 'vue'

const thisYear = computed(() => {
  const yearToday = new Date().getFullYear()
  return yearToday
})
</script> -->

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  computed: {
    thisYear() {
      const yearToday = new Date().getFullYear()
      return yearToday
    }
  }
}
</script>
