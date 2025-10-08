<template>
  <div>
    <h1>Contents</h1>
    <NuxtLink to="/contents/create">Create Content</NuxtLink>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <NuxtLink :to="`/contents/${content.id}`">{{ content.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: contents } = await useFetch('/api/contents')
</script>
