<template>
  <div class="bg-white p-6">
    <div class="flex justify-between items-center">
      <span>
        <span role="button" @click="$router.go(-1)">
          <icon icon="ic:sharp-arrow-back" />
        </span>
        <h5 class="font-semibold text-[18px] mt-2">Create Blog Post</h5>
      </span>
    </div>

    <div class="mt-3">
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-4">
        <div>
          <label for="">Blog Title</label>
          <Field
            name="title"
            rules="required"
            placeholder="Enter a title for the news (e.g., The rise of a people)"
            class="input"
            v-model="title"
          >
          </Field>
        </div>

        <div>
          <label for="">Category</label>
          <Field
            name="title"
            rules="required"
            placeholder="Enter a title for the news (e.g., The rise of a people)"
            class="input"
            v-model="category"
          >
          </Field>
        </div>

        <div>
          <label for="">Blog Content</label>
          <Editor
            placeholder="Enter the body of your news item..."
            editorStyle="height: 250px;"
            v-model="content"
          >
            <template #toolbar>
              <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-link"></button>
                <button class="ql-align"></button>
                <button class="ql-align" value="right"></button>
                <button class="ql-align" value="center"></button>
                <button class="ql-align" value="justify"></button>
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
                <select class="ql-header">
                  <option selected></option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                  <option value="6"></option>
                </select>
              </span>
            </template>
          </Editor>
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
            <span class="text-primary-600 text-xs font-medium block">Add Preview Image</span>
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
      category: ''
    }
  },

  methods: {
    async onSubmit(values, { resetForm }) {
      this.isLoading = true
      let payload = {
        ...values,
        slug: values.title.toLowerCase().split(' ').join('-'),
        content: this.content
      }
      console.log(payload)
      try {
        if (this.image) {
          const imageUrl = await this.$news.uploadImage(this.image)
          await this.$news.create(payload, imageUrl)
        } else {
          await this.$news.create(payload, null)
        }
        console.log(payload)
        console.log('Document added successfully')
        this.isLoading = false
      } catch (error) {
        console.error('Error saving document:', error)
      } finally {
        this.isLoading = false
        resetForm()
        this.content = ""
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
