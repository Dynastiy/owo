<template>
  <div class="">
    <hero-section
      heroHeader="Join the Future of Currency Exchange - SmileSwap is Coming Soon!"
      heroDesc="Get early access to the most innovative currency exchange marketplace that connects you
          with top dealers and brokers for secure, fast, and competitive trading."
      :heroImg="heroImg"
    />

    <div>
      <AboutUs
        aboutSpan="By signing up for our waitlist, you'll be among the first to experience"
        aboutDesc="SmileSwap is transforming the way you exchange currencies. Whether you're an individual
          looking for the best rates or a business handling international payments, SmileSwap is
          designed to offer you unparalleled convenience and security."
      >
        <template #default>
          <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
            <div
              v-for="(item, idx) in info"
              :key="idx"
              :item="item"
              :class="`w-full flex flex-col p-12 rounded-3xl border border-[#]`"
              :style="{ border: `1px solid #${item.color}` }"
            >
              <div class="flex-1 flex flex-col gap-4">
                <span
                  :class="`block p-6 w-fit mx-auto shadow-xl rounded-full text-xl`"
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
      descText="Don't miss out on the future of currency exchange! Join the waitlist today and receive exclusive updates and early access."
      headerText="Sign Up Now - Get Early Access to SmileSwap!"
      btnText="Get Early Access"
      :imgUrl="image"
    />
  </div>
</template>

<script>
import image from '@/assets/img/homepage.jfif'
import heroImg from '@/assets/img/hero-image.png'

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
          title: 'The Best Deals',
          icon: 'fa6-solid:handshake-simple',
          desc: 'A marketplace where you can compare and choose the best exchange rates.',
          mainColor: 'FF8D07',
          color: 'FDEAD3'
        },
        {
          title: 'Hassle-Free Trading',
          icon: 'streamline:graph-bar-increase-solid',
          desc: 'A simple, user-friendly interface for seamless currency trading.',
          mainColor: '3AE53A',
          color: 'D9F2D9'
        },
        {
          title: 'Trading Without Bounds',
          icon: 'fa-solid:globe-europe',
          desc: 'Flexibility to trade across various scenarios, including cash, cross-border, and offshore exchanges.',
          mainColor: 'DA2565',
          color: 'F2D9E2'
        },
        {
          title: ' Advanced Escrow Protection',
          icon: 'pepicons-pencil:shield-checkered',
          desc: 'Safe and secure transactions powered by advanced escrow and verification systems.',
          mainColor: '05C9E3',
          color: 'D3F8FD'
        }
      ]
    }
  }
}
</script>
