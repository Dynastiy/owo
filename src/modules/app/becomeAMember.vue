<template>
  <div class="container py-8">
    <h1 class="font-bold text-3xl mb-0 mt-2">Become a Member</h1>

    <div class="mt-4 bg-white p-6 rounded-md">
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

        <div>
          <label for="">Clan</label>
          <Field
            name="clan"
            class="input"
            placeholder="Enter Clan Name"
            type="text"
            rules="required"
          />
          <ErrorMessage name="clan" class="text-xs text-red-500 text-semibold"></ErrorMessage>
        </div>

        <div>
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

        <div>
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

        <div>
          <label for="">Reason for joining</label>
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

        <div>
          <label for="">Upload Photo</label>
          <DragInput @uploadImage="uploadImage" />
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

        <!-- <span class="block text-center font-regular text-[12px]"
          >By continuing you agree to the
          <a :href="`${$axiosConfig.talentUrl}terms-of-use`" target="_blank" class="text-[#007BFF]">terms of service</a> and
          <a :href="`${$axiosConfig.talentUrl}privacy-policy`" target="_blank" class="text-[#007BFF]">privacy policy</a>
        </span> -->
      </vForm>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      isLoading: false,
      typePassword: 'password',
      file: null
    }
  },

  methods: {
    async onSubmit(values) {
      this.isLoading = true
      let payload = {
        ...values
      }
      try {
        const imageUrl = await this.$members.uploadUserImage(this.file)
        console.log(payload)
        await this.$members.addDocumentWithImage(payload, imageUrl)
        console.log('Document added successfully')
        this.isLoading = false
      } catch (error) {
        console.error('Error saving document:', error)
      } finally {
        this.isLoading = false
      }
    },

    uploadImage(file) {
      this.file = file
    }
  },

  mounted() {
    // const isAuth = this.$store.getters['auth/isAuthenticated']
    // if (isAuth) {
    //   const isEmailVerified = this.user.email_verified_at
    //   if (isEmailVerified !== null) {
    //     this.$router.push('/department').catch(() => {})
    //   } else {
    //     this.$router.push('/auth/verification')
    //   }
    // }
  },

  computed: {
    user() {
      return this.$store.getters['auth/getUser']
    }
  }
}
</script>

<style></style>
