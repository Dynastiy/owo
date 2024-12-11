<template>
  <header
    :class="[
      isScrolled ? 'bg-neutral-100' : 'bg-neutral-900/10 ',
      'sticky top-0 z-50 transition-colors duration-300'
    ]"
  >
    <div class="container">
      <nav class="flex justify-between items-center py-4">
        <span role="button" @click="$router.push('/')">
          <img
            :src="isMobile ? collapsedImg : expandedImg"
            :class="[isMobile ? 'w-12' : 'w-44']"
            alt=""
          />
        </span>

        <!-- <span>
          {{ isMobile }}
        </span> -->

        <span class="lg:hidden md:hidden block" role="button" @click="visible = !visible">
          <icon icon="material-symbols:menu" class="text-[35px] text-primary" />
        </span>

        <div class="hidden gap-4 items-center lg:flex md:flex">
          <ul class="flex gap-6 items-center">
            <li v-for="(item, idx) in menu" :key="idx">
              <router-link :to="item.href" class="block text-[16px] capitalize">
                <span class="text-sm font-[600]">{{ item.label.split('-').join(' ') }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="md:hidden lg:hidden block">
      <Sidebar v-model:visible="visible" position="right">
        <template #container="{ closeCallback }">
          <div class="h-screen bg-white flex flex-col z-20">
            <div class="p-4">
              <span role="button" class="flex justify-end mt-4" @click="closeCallback">
                <icon icon="gg:close-o" class="text-red-500 text-2xl" />
              </span>
            </div>
            <ul class="flex flex-col gap-4 p-6">
              <li v-for="(item, idx) in menu" :key="idx">
                <router-link :to="item.href" class="block text-[16px] capitalize font-semibold">
                  <span class="">{{ item.label.split('-').join(' ') }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </template>
      </Sidebar>
    </div>
  </header>
</template>

<script>
import expandedImg from '@/assets/brandImg/logo.png'
import collapsedImg from '@/assets/brandImg/logo_collapsed.png'
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visible: false,
      isScrolled: false,
      isMobile: false,
      windowWidth: '',
      expandedImg,
      collapsedImg
    }
  },

  methods: {
    menuFunc(e) {
      this.visible = false
      this.$router.push(e.href)
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 50 // Update scroll state based on scroll position
    },

    updateImageUrl() {
      const width = window.innerWidth
      this.isMobile = window.matchMedia('(max-width: 767px)').matches || width < 768

      console.log(window.matchMedia('(max-width: 767px)').matches)
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll) // Attach scroll event listener
    window.addEventListener('resize', this.updateImageUrl) // Listen for window resize
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll) // Clean up the event listener
    window.removeEventListener('resize', this.updateImageUrl) // Cleanup on component unmount
  },

  watch: {
    window: {
      handler(val) {
        console.log(val, 'checking')
      },
      immediate: true,
      deep: true
    }
  },

  computed: {
    routeName() {
      return this.$route.name
    }

    // isMobile() {
    //   const isMobileDevice = window.matchMedia('(max-width: 767px)').matches
    //   let deviceType = ''
    //   if (isMobileDevice) {
    //     console.log('You are using a mobile device')
    //     deviceType = 'You are using a mobile device'
    //   } else {
    //     console.log('You are using a desktop device')
    //     deviceType = 'You are using a desktop device'
    //   }
    //   return deviceType
    // }
  },

  // function isMobileDevice() {
  //   return window.matchMedia('(max-width: 767px)').matches
  // }
  // if (isMobileDevice()) {
  //   console.log('You are using a mobile device')
  //   this.$router.push(`/app/kyc/${e}`)
  //   console.log(e)
  // } else {
  //   console.log('You are using a desktop device')
  //   this.active = this.active == null ? e : this.active !== e ? e : null

  // }

  created() {}
}
</script>

<style>
header .router-link-exact-active span {
  /* color: var(---secondary); */
  /* font-weight: 700 !important; */
  position: relative;
  color: var(---secondary-color);
}

header a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
}

/* Initial state of the underline */
header a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px;
  bottom: -5px;
  left: 0;
  background-color: var(---secondary-color); /* Change to the color you want */
  transition: width 0.3s ease;
}

/* On hover, expand the underline */
header a:hover::after {
  width: 100%;
}

/* .router-link-exact-active span:after {
  position: absolute;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'%3E%3Cpath fill='red' fill-rule='evenodd' d='M11.823 9.295a.73.73 0 0 1-.552 1.205H4.729a.73.73 0 0 1-.552-1.205L7.2 5.786a1 1 0 0 1 .757-.347h.084a1 1 0 0 1 .757.347z' clip-rule='evenodd'/%3E%3C/svg%3E");
  bottom: -22px;
  left: 45%;
  transform: translate(-50%, 0);
}

.normal-flag[data-v-60be6971] {
  margin: 0 !important;
} */
</style>
