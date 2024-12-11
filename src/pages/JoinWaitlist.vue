<template>
  <div class="container">
    <div class="grid lg:grid-cols-2 md:grid-cols-2 gap-8 py-12 items-center">
      <div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-4 flex-1"></div>
          <h4 class="header text-4xl text-accent lg:w-10/12 leading-[32px] md:w-10/12">
            Join the Future of Currency Exchange - SmileSwap is Coming Soon!
          </h4>
          <span class="text-accent block text-[15px] leading-[20px]"
            >SmileSwap is transforming the way you exchange currencies. Whether you're an individual
            looking for the best rates or a business handling international payments, SmileSwap is
            designed to offer you unparalleled convenience and security.</span
          >
          <div class="lg:w-8/12 md:w-8/12 w-full">
            <img
              src="@/assets/img/homepage.jfif"
              loading="lazy"
              alt=""
              class="h-[250px] w-full object-cover object-top rounded-lg"
            />
          </div>
        </div>
      </div>

      <div class="bg-[#FAFBFF] p-8 rounded-xl">
        <h4 class="font-bold text-lg text-center">Be the First to Experience SmileSwap</h4>
        <h6 class="text-center text-gray-400 text-[13px]">Complete the following steps</h6>

        <div class="flex gap-4 flex-col mt-4">
          <div class="flex bg-white border border-[#DAE1ED] items-center p-4 rounded-md gap-2">
            <icon icon="ic:round-devices" class="text-bodyText" />
            <span class="flex-1 text-sm">What device do you use?</span>
            <icon icon="uis:angle-right-b" class="text-bodyText" />
          </div>

          <div class="flex bg-white border border-[#DAE1ED] items-center p-4 rounded-md gap-2">
            <icon icon="lucide:square-activity" class="text-bodyText" />
            <span class="flex-1 text-sm">How would you like to use SmileSwap</span>
            <icon icon="uis:angle-right-b" class="text-bodyText" />
          </div>

          <div class="flex bg-white border border-[#DAE1ED] items-center px-4 rounded-md gap-2">
            <icon icon="ci:user-02" class="text-bodyText" />
            <input
              class="flex-1 text-sm py-4 outline-none placeholder:text-bodyText"
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div class="flex bg-white border border-[#DAE1ED] items-center px-4 rounded-md gap-2">
            <icon icon="material-symbols:mail-outline" class="text-bodyText" />
            <input
              class="flex-1 text-sm py-4 outline-none placeholder:text-bodyText"
              type="text"
              placeholder="Email"
            />
          </div>

          <div>
            <textarea
              name=""
              class="bg-white border border-[#DAE1ED] items-center p-4 placeholder:text-bodyText rounded-md w-full"
              id=""
              cols="30"
              rows="5"
              placeholder="Write us a message"
            ></textarea>
          </div>

          <button class="brand-btn brand-primary">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
