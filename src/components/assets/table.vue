<template>
  <div class="bg-white p-4 rounded-md">
    <div class="mb-4" v-if="$slots.tableHeader">
      <slot name="tableHeader"></slot>
    </div>

    <DataTable :value="items" tableStyle="min-width: 50rem" stripedRows :loading="loading">
      <template #loading> Loading data. Please wait. </template>
      <TableColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
        <template #body="{ data, field }">
          <template v-if="field === 'rating'">
            <Rating v-model="data.rating" :cancel="false" />
          </template>
          <template v-if="field === 'user'">
            <span class="flex items-center gap-2">
              <img class="h-8 w-8 object-center object-fit rounded-full" :src="data.imageUrl" />
              <span>{{data.fullname}}</span>
            </span>
          </template>
          <template v-else-if="field === 'timestamp'">
            <span>{{ formatDate(data.createdAt) }}</span>
          </template>
          <template v-else-if="field === 'actions'">
            <span role="button" @click="$emit('tableButtonClick', data)" class="text-amber-600 text-xs">View Details</span>
          </template>
          <template v-else>
            {{data[field]}}
          </template>
        </template>
      </TableColumn>
    </DataTable>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    formatDate(value) {
      let currentDate = new Date(value)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return currentDate.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style>
.p-datatable .p-datatable-thead > tr > th {
  background: var(---gray-100);
  font-size: 14px;
}

.p-column-title {
  font-weight: 600;
}

/* Prime vue  */
.p-dropdown .p-dropdown-label.p-placeholder {
  font-size: 13px;
}

.p-datatable .p-datatable-tbody > tr > td {
  font-size: 13px;
}
</style>
