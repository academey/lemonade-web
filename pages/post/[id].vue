<script setup lang="ts">
useHead({
  title: "Secret Page",
});

definePageMeta({
  auth: true,
});
const route = useRoute()

// When accessing /post/1, route.params.id will be 1
console.log(route.params.id)

</script>

<template>
<!--  <UTable :rows="postList" :columns="columns" />-->
  그냥 페이지화면
</template>
