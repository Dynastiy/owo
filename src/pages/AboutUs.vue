<template>
  <div class="">
    <hero-section
      heroHeader="About SmileSwap - Your Trusted Currency Exchange Marketplace."
      heroDesc="At SmileSwap, we believe that currency exchange should be simple, secure, and accessible for everyone."
      :heroImg="heroImg"
    />

    <div>
      <AboutUs
        aboutDesc="SmileSwap is built on the idea that exchanging currencies shouldn't be a complicated or time-consuming process. We've created a platform that connects buyers, sellers, and authorized dealers in one transparent marketplace, giving you access to the best exchange rates and secure transactions"
      >
        <template #default>
          <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-8">
            <div
              v-for="(item, idx) in info"
              :key="idx"
              :item="item"
              :class="`w-full flex flex-col p-12 rounded-3xl border border-[#] lg:first:col-span-3 md:first:col-span-3`"
              :style="{ border: `1px solid #${item.color}` }"
            >
              <div class="flex-1 flex flex-col gap-4">
                <span
                  :class="`block p-6 w-fit mx-auto shadow-xl rounded-full text-3xl`"
                  :style="{ backgroundColor: `#${item.color}`, color: `#${item.mainColor}` }"
                >
                  <icon :icon="item.icon" />
                </span>
                <h6 class="text-lg text-center font-semibold text-accent">{{ item.title }}</h6>
                <p class="text-sm text-primary font-regular text-center">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </template>
      </AboutUs>
    </div>

    <JoinWaitlist
      descText="We are committed to revolutionizing the currency exchange experience and making global transactions accessible, affordable, and secure. Join our waitlist today and be part of the movement that's reshaping currency exchange."
      headerText="Join the Waitlist Now - Be the First to Experience SmileSwap."
      btnText="Join the waitlist"
      :imgUrl="image"
    />
  </div>
</template>

<script>
import image from '@/assets/img/homepage.jfif'
import heroImg from '@/assets/img/map.png'
import AboutUs from '@/components/home/AboutUs.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import JoinWaitlist from '@/components/home/JoinWaitlist.vue'
export default {
  components: { AboutUs, HeroSection, JoinWaitlist },
  data() {
    return {
      image,
      heroImg,
      info: [
        {
          title: ' Advanced Escrow Protection',
          icon: 'pepicons-pencil:shield-checkered',
          desc: 'A community of verified dealers, brokers, and traders ready to meet your exchange needs.',
          mainColor: '05C9E3',
          color: 'D3F8FD'
        },
        {
          title: 'Get the Best Deals',
          icon: 'fa6-solid:handshake-simple',
          desc: 'Competitive exchange rates updated in real-time by trusted dealers.',
          mainColor: 'FF8D07',
          color: 'FDEAD3'
        },
        {
          title: 'Trade with Ease',
          icon: 'streamline:graph-bar-increase-solid',
          desc: 'A flexible platform that supports cash, cross-border, and offshore exchanges.',
          mainColor: '3AE53A',
          color: 'D9F2D9'
        },
        {
          title: 'Trade Anywhere, Anytime',
          icon: 'fa-solid:globe-europe',
          desc: 'A secure and transparent escrow system that guarantees the safety of every trade.',
          mainColor: 'DA2565',
          color: 'F2D9E2'
        }
      ]
    }
  }
}
</script>
