<template>
  <footer class="bg-gray-800">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6 text-gray-300 flex"
    >
      <p class="flex-1">Joris Albeda 2025. All Rights Reserved.</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300"></Icon>
        </a>
      </div>
    </section>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "GitHub",
    href: "https://github.com/Joris-Albeda",
    icon: "entypo-social:github-with-circle",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jorisalbeda",
    icon: "entypo-social:instagram-with-circle",
  },
]
</script>

<style></style>
