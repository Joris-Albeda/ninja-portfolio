<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("content").path(`/blog/${slug}`).first()
})
</script>

<template>
  <div v-if="post">
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer class="prose my-10 mx-auto max-w-7xl" :value="post" />
    <div class="my-8">
      <a
        v-for="tag in post.meta.tags"
        :key="tag"
        :href="`/blog/tags/${tag}`"
        class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4"
      >
        <Icon name="entypo:tag" size="1.5rem" class="text-gray-100 mr-2"></Icon>
        {{ tag }}
      </a>
    </div>
  </div>
  <div v-else>Post {{ slug }} not found</div>
</template>
