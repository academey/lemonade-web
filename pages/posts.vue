<script setup lang="ts">
useHead({
  title: "Post List",
});

definePageMeta({
  auth: true,
});

const page = ref(1)
const pageCount = 10
const data = await useFetch("/api/postList", {
  query: {
    page: page,
    pageCount: pageCount,
  },
}) as any
const { postList, totalCount } = data.data.value;
const columns = [{
  key: 'id',
  label: 'Id'
}, {
  key: 'title',
  label: 'Title'
}, {
  key: 'content',
  label: 'Content'
},
  {
    key: 'actions'
  }]
</script>

<template>
  <UTable :rows="postList" :columns="columns">
    <template #actions-data="{ row }">
      <ULink
          :to="{name:'post-id', params:{id:row.id}}"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        Detail View
      </ULink>
    </template>
  </UTable>
  <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
    <UPagination v-model="page" :page-count="pageCount" :total="totalCount" />
  </div>
</template>
