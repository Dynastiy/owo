<template>
  <div class="">
    <hero-section
      heroHeader="Effortless Currency Exchange for Your Business - SmileSwap"
      heroDesc="Streamline your business transactions with fast, secure, and transparent currency exchange solutions."
      :heroImg="heroImg"
    />

    <div>
      <AboutUs
        aboutDesc="Running a business in today's global market requires quick, reliable, and cost-effective currency exchange. SmileSwap makes international transactions easier than ever for businesses of all sizes, from importers and exporters to freelancers and service providers"
        aboutSpan="With SmileSwap, your business can:"
      >
        <template #default>
          <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-8">
            <div
              v-for="(item, idx) in info.slice(0,3)"
              :key="idx"
              :item="item"
              :class="`w-full flex flex-col p-12 rounded-3xl`"
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
          <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            <div
              v-for="(item, idx) in info.slice(3,5)"
              :key="idx"
              :item="item"
              :class="`w-full flex flex-col p-12 rounded-3xl`"
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
      descText="Prepare your business for the future of currency exchange with SmileSwap. Join the waitlist today to get started."
      headerText="Sign Up for Early Access - Get the Best Exchange Rates for Your Business."
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
          title: 'Get Best Deals',
          icon: 'fa6-solid:handshake-simple',
          desc: 'Access competitive and real-time exchange rates from authorized dealers and brokers.',
          mainColor: 'FF8D07',
          color: 'FDEAD3'
        },

        {
          title: 'Get Escrow Security',
          icon: 'pepicons-pencil:shield-checkered',
          desc: 'Safeguard every transaction with our automated escrow system, ensuring funds are only released once both parties are satisfied.',
          mainColor: '05C9E3',
          color: 'D3F8FD'
        },
        
        {
          title: 'Pay Globally, Instantly',
          icon: 'fluent:payment-wireless-28-filled',
          desc: 'Make cross-border payments and offshore exchanges quickly and securely.',
          mainColor: '3AE53A',
          color: 'D9F2D9'
        },
        {
          title: 'Effortless Payment Integration',
          icon: 'material-symbols:integration-instructions',
          desc: 'Seamlessly integrate your transactions with flexible payment methods and secure gateways.',
          mainColor: 'DA2565',
          color: 'F2D9E2'
        },
        {
          title: 'Trade with Confidence, Data-Driven',
          icon: 'material-symbols-light:chart-data',
          desc: 'Receive real-time insights and analytics to help you make informed decisions on currency trading.',
          mainColor: '5C60CF',
          color: 'D9DAF2'
        }
      ]
    }
  }
}
</script>
