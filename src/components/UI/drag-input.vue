<template>
    <div class="main">
      <div>
        <div class="dropzone-container flex flex-col items-center justify-center text-center" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input
            type="file"
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".png,.jpg,.webp,.jpeg"
          />
  
          <label for="fileInput" class="file-label mb-0 flex flex-col items-center">
            <icon icon="ph:upload-simple-fill" class="text-[30px]"/>
            <div v-if="isDragging">Release to drop files here.</div>
            <div v-else class="text-[16px] font-medium mb-0">Drop & Drop or <span class="text-secondary-600 font-semibold">Choose file</span> to upload</div>
            <span class="text-xs text-neutral-700">Supported format .png,.jpg,.webp,.jpeg</span>
          </label>
        </div>
  
      </div>
      <div>
          
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
        files: []
      }
    },
    methods: {
      onChange() {
        this.files.push(...this.$refs.file.files)
        this.$emit('uploadImage', this.files[0])
        console.log(this.files[0])
      },
  
      dragover(e) {
        e.preventDefault()
        this.isDragging = true
      },
  
      dragleave() {
        this.isDragging = false
      },
  
      drop(e) {
        e.preventDefault()
        this.$refs.file.files = e.dataTransfer.files
        this.onChange()
        this.isDragging = false
      }
    }
  }
  </script>
  <style scoped>
  /* .main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
  } */
  
  .dropzone-container {
    height: 200px;
    width: 100%;
    background: var(---gray-100);
    border: 1px dashed var(---gray-600);
      /* border-style: ; */
  }
  
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
  
  .preview-container {
    display: flex;
    margin-top: 2rem;
  }
  
  .preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
  }
  
  .preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
  }
  </style>
  