<template>
  <div>
    <h1 class="text-3xl my-8">Blog Posts</h1>

    <p>Just look at my beautiful posts. Want to be a guest blogger? Too bad.</p>

    <ul>
      <li v-for="post in posts" :key="post.id" class="my-8 py-4 border-b-2">
        <NuxtLink :to="post.path" class="text-violet-700 text-2xl">{{
          post.title
        }}</NuxtLink>
        <p class="text-gray-500">{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("content").all()
)
</script>

<style></style>
