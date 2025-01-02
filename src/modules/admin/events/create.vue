<template>
  <div class="bg-white p-6">
    <div class="flex justify-between items-center">
      <span>
        <span role="button" @click="$router.go(-1)">
          <icon icon="ic:sharp-arrow-back" />
        </span>
        <h5 class="font-semibold text-[18px] mt-2">Create Event</h5>
      </span>
    </div>

    <div class="mt-3">
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-4">
        <div>
          <label for="">Event Title</label>
          <Field
            name="title"
            rules="required"
            placeholder="Enter a title for the event (e.g., Community Meeting)"
            class="input"
            v-model="title"
          >
          </Field>
        </div>

        <div>
          <label for="">Event Date</label>
          <Field
            name="event_date"
            rules="required"
            placeholder="Enter date for the event"
            class="input"
            type="date"
            v-model="event_date"
          >
          </Field>
        </div>

        <div>
          <label for="">Location</label>
          <Field
            name="location"
            rules="required"
            placeholder="Enter a location for the event"
            class="input"
            v-model="location"
          >
          </Field>
        </div>

        <div>
          <label for="">Registration Link (If any)</label>
          <Field
            name="link"
            placeholder="Enter a link for registration (If registration is required)"
            class="input"
            v-model="link"
          >
          </Field>
        </div>

        <div>
          <label for="">Description</label>
          <Field
            as="textarea"
            name="description"
            placeholder="Enter a description for this event"
            class="input"
            v-model="description"
          >
          </Field>
        </div>

        <div>
          <input
            type="file"
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".png,.jpg,.jpeg"
          />
          <div class="flex items-center gap-2" v-if="image">
            <span class="text-gray-400 text-xs block">
              {{ image.name }} ({{ formattedImageSize(image) }})</span
            >
            <label for="fileInput" class="file-label">
              <span class="text-primary text-xs font-medium block">Replace</span>
            </label>
            <span class="text-red text-xs font-medium block" role="button" @click="removeImage">
              Remove
            </span>
          </div>

          <label v-else for="fileInput" class="file-label">
            <span class="text-primary-600 text-xs font-medium block">Add Event Image</span>
          </label>
        </div>

        <div class="flex gap-3 justify-end mt-4">
          <!-- <button class="btn-border py-2 px-6" @click.prevent="$router.go(-1)">Back</button> -->
          <button
            class="brand-btn px-8"
            :disabled="!meta.valid"
            :class="[!meta.valid ? 'bg-neutral-400 text-neutral-700' : 'brand-primary']"
          >
            <span> Save </span>
          </button>
        </div>
      </vForm>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      content: '',
      title: '',
      location: '',
      event_date: '',
      link: '',
      description: ''
    }
  },

  methods: {
    async onSubmit(values, { resetForm }) {
      this.isLoading = true
      let payload = {
        ...values,
        slug: values.title.toLowerCase().split(' ').join('-')
      }
      console.log(payload)
      try {
        if (this.image) {
          const imageUrl = await this.$events.uploadImage(this.image)
          await this.$events.create(payload, imageUrl)
        } else {
          await this.$events.create(payload, null)
        }
        console.log(payload)
        console.log('Document added successfully')
        this.isLoading = false
      } catch (error) {
        console.error('Error saving document:', error)
      } finally {
        this.isLoading = false
        resetForm()
        this.content = ''
        this.image = null
      }
    },

    removeImage() {
      this.image = null
    },

    onChange() {
      let files = this.$refs.file.files
      this.image = files[0]
      console.log(this.image, 'from:photo Upload')
    },

    formattedImageSize(image) {
      if (image < 1024) {
        return `${image.size.toFixed(2)} Bytes`
      } else if (image.size < 1048576) {
        return `${(image.size / 1024).toFixed(2)} KB`
      } else {
        return `${(image.size / 1048576).toFixed(2)} MB`
      }
    }
  },

  beforeMount() {},

  computed: {}
}
</script>

<style>
.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}
</style>
