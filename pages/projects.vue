<template>
  <h1 class="text-3xl my-8">Projects</h1>
  <p class="text-lg mb-8">Look, projects!</p>
  <section class="grid grid-cols-2 gap-10">
    <div
      v-for="project in data?.viewer.repositories.nodes"
      :key="project.id"
      class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50"
    >
      <h2 class="text-2xl text-violet-600">{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const query = gql`
  {
    viewer {
      repositories(first: 8, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

const { data } = await useAsyncQuery(query)
</script>

<style></style>
