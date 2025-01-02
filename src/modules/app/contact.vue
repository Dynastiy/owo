<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isLoading = ref(false)

const onSubmit = () => {
  return
}
</script>

<template>
  <div class="container mt-6">
    <div class="flex gap-6 lg:flex-row md:flex-row flex-col">
      <div class="flex-1">
        <h3 class="font-semibold text-3xl">Contact Us</h3>
        <h5 class="text-sm">8901 MARMORA ROAD, GLASGOW, D04 89GR.</h5>
        <ul class="mt-3">
          <li class="flex gap-1 items-center text-sm">
            <span><Icon icon="mingcute:phone-line" /> </span> 080123456789
          </li>
          <li class="flex gap-1 items-center text-sm">
            <span><Icon icon="ic:outline-email" /> </span> mail@demo.com
          </li>
        </ul>
      </div>
      <div class="bg-white lg:w-8/12 md:w-8/12 w-full p-4 rounded-md">
        <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-2">
          <div>
            <label for="">Full Name</label>
            <Field
              name="fullname"
              class="input"
              placeholder="Full Name"
              type="text"
              rules="required"
            />
            <ErrorMessage name="fullname" class="text-xs text-red-500 text-semibold"></ErrorMessage>
          </div>

          <div class="flex gap-2">
            <div class="w-full">
              <label for="">Email</label>
              <Field
                name="email"
                class="input"
                placeholder="Enter Valid Email Address"
                type="email"
                rules="required"
              />
              <ErrorMessage name="email" class="text-xs text-red-500 text-semibold"></ErrorMessage>
            </div>

            <div class="w-full">
              <label for="">Phone Number</label>
              <Field
                name="phone_number"
                class="input"
                placeholder="Enter Phone Number"
                type="tel"
                rules="required"
              />
              <ErrorMessage
                name="phone_number"
                class="text-xs text-red-500 text-semibold"
              ></ErrorMessage>
            </div>
          </div>

          <div>
            <label for="">Message</label>
            <Field
              name="reason"
              class="input"
              placeholder="Enter your reason for wanting to join"
              as="textarea"
              cols="3"
              rows="5"
              rules="required"
            />
            <ErrorMessage name="reason" class="text-xs text-red-500 text-semibold"></ErrorMessage>
          </div>

          <div class="mt-3 text-center">
            <button
              class="w-full brand-btn flex items-center justify-center gap-2"
              :disabled="isLoading || !meta.valid"
              :class="[
                isLoading
                  ? 'bg-gray-400 text-gray-700'
                  : !meta.valid
                    ? 'bg-gray-400 text-gray-700'
                    : 'brand-btn brand-primary text-white'
              ]"
            >
              <icon icon="line-md:loading-alt-loop" class="text-[20px]" v-if="isLoading" />
              <span> Submit </span>
            </button>
          </div>
        </vForm>
      </div>
    </div>
  </div>
</template>

<style></style>
