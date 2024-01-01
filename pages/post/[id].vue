<script setup lang="ts">
import type {Post} from "~/server/model/post";
import {Role} from "~/auth/server/utils/db";

useHead({
  title: "Post Detail Page",
});
const { data: session } = await useFetch("/api/auth/session", { headers: useRequestHeaders(['cookie'])});
let value = session.value;
definePageMeta({
  auth: true,
});
const route = useRoute()

let postId = route.params.id;

const data = await useFetch("/api/postDetail", {
  query: {
    postId
  },
}) as any
const post = data.data.value.post as Post;
let isAvailable = false;

if (session.value?.id === post.user.id || session.value?.role == Role.ADMIN) {
  isAvailable = true;
}

</script>

<template>
  <template>
    <UCard>
      <UButton v-if="isAvailable">편집</UButton>
      <UButton v-if="isAvailable">삭제</UButton>
      <template #header>
        <h1>{{post.title}}</h1>
      </template>
      <h3>{{post.content}}</h3>
    </UCard>
  </template>
</template>
