<template>
  <div class="grid lg:grid-cols-3 gap-3">
    <div class="flex flex-col gap-1 bg-white p-4 rounded-md" v-for="(obj, idx) in info" :key="idx">
      <span :class="`block w-fit p-2 rounded-full`" :style="{background: `#${obj.color}` }">
        <Icon :icon="obj?.icon" class="text-white text-2xl" />
      </span>
      <h4 class="font-semibold text-lg">{{ obj?.title }}</h4>
      <p class="text-sm text-gray-600">{{ obj?.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'


const info = ref([
  {
    title: 'Advocacy and Representation',
    desc: 'We champion the rights and interests of community members by engaging with policymakers, organizations, and stakeholders. Our goal is to ensure that the voices of the underserved and underrepresented are heard and prioritized in decision-making processes',
    icon: 'octicon:law-24',
    color: '04611F'
  },
  {
    title: 'Community Development',
    desc: 'Through targeted programs, we address critical issues such as affordable housing, education, healthcare, and infrastructure. We collaborate with local leaders and organizations to create opportunities that enhance the quality of life for all residents',
    icon: 'formkit:people',
    color: '2D2E7D'
  },
  {
    title: 'Economic Empowerment',
    desc: 'We support small businesses, job seekers, and entrepreneurs by offering workshops, resources, and networking opportunities. Our initiatives aim to build a resilient local economy that benefits everyone.',
    icon: 'majesticons:money-hand-line',
    color: 'A24B33'
  },
  {
    title: 'Education and Awareness',
    desc: 'We provide educational programs, training sessions, and outreach campaigns to raise awareness about social justice, environmental sustainability, and civic engagement. Knowledge is the cornerstone of progress, and we strive to equip our community with the tools to lead',
    icon: 'fluent-mdl2:education',
    color: 'DD581D'
  },
  {
    title: 'Crisis Support',
    desc: 'In times of need, we stand by our community through direct assistance, relief programs, and partnerships with other organizations. Whether it’s a natural disaster or a personal crisis, we are here to help',
    icon: 'material-symbols:crisis-alert-rounded',
    color: '955A6B'
  },
  {
    title: 'Cultural and Social Engagement',
    desc: 'We celebrate the diversity of our community through cultural events, art programs, and public forums. These initiatives foster understanding, connection, and a shared vision for our future.',
    icon: 'tabler:social',
    color: 'D42443'
  }
])
</script>

<style>
/* Your styles here */
</style>
