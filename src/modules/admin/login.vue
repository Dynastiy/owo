<template>
  <div>
    <span
      class="text-white bg-primary flex items-center justify-center w-[60px] h-[60px] rounded-full"
    >
      <icon icon="ph:hand-waving-fill" class="h-[25px] w-[25px]" />
    </span>
    <h1 class="font-bold text-xl mb-0 mt-2">Welcome to Admin Panel</h1>

    <div class="mt-4">
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-2">
        <div>
          <label for="">Email</label>
          <Field
            name="email"
            class="input"
            placeholder="jane@gmail.com"
            type="email"
            rules="email"
          />
          <ErrorMessage name="email" class="text-xs text-red-500 text-semibold"></ErrorMessage>
        </div>

        <div>
          <label for="">Password</label>
          <Field name="password" v-slot="{ field }" rules="required">
            <div class="input-field">
              <input
                :type="typePassword ? 'password' : 'text'"
                name="password"
                id="password"
                placeholder="Password"
                v-bind="field"
              />
              <span class="password-iccon" role="button" @click="typePassword = !typePassword">
                <icon
                  :icon="typePassword ? 'ph:eye-closed' : 'pepicons-pencil:eye-closed-off'"
                  class="form-icon"
                />
              </span>
            </div>
          </Field>
          <ErrorMessage name="password" class="text-xs text-red-500 text-semibold"></ErrorMessage>
        </div>

        <!-- <a :href="`${$axiosConfig.talentUrl}forgotten-password`" class="block text-right w-fit ml-auto text-primary-500 text-[14px] font-semibold"
          >Forgot Password?</a
        > -->

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
            <span> Continue </span>
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
      typePassword: 'password'
    }
  },

  methods: {
    async onSubmit(values) {
      this.isLoading = true
      const payload = {
      email: values.email,
      password: values.password
      }
      try {
        this.$auth.login(payload)
        .then((res)=> {
          console.log('login data:', res)
          let userData = res
          this.$store.commit('auth/login', {
            token: userData.accessToken,
            user: userData
          })
          localStorage.setItem('_owo_token', userData.accessToken)
          let redirectFrom = this.$route.query.redirect
          let urlTo = redirectFrom ? redirectFrom : '/admin/dashboard'
          this.$router.push(urlTo)
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
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
