<template>
  <div>
    <h1 class="font-semibold text-xl">All registered Members</h1>
    <div class="mt-3">
      <dTable :columns="columns" :items="items" :loading="loading" @tableButtonClick="viewDetails">
        <!-- <template #tableHeader>
        <div>
          <top-header :title="title" :desc="desc" />
        </div>
      </template> -->
      </dTable>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { field: 'user', header: 'Name' },
        { field: 'email', header: 'Email' },
        { field: 'timestamp', header: 'Date' },
        { field: 'actions', header: '' }
      ],
      items: [],
      loading: false
    }
  },

  methods: {
    fetchMembers() {
      this.$members.fetchMembers().then((res) => {
        console.log(res)
        this.items = res
      })
    },

    viewDetails(e) {
      console.log(e)
      this.$members.getMember().then((res) => {
        console.log(res)
      })
    }
  },

  beforeMount() {
    this.fetchMembers()
  }
}
</script>

<style></style>
