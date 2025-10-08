<template>
  <div>
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>
    <p>URL: {{ content.url }}</p>
    <p>Thumbnail: {{ content.thumbnail }}</p>
    <p>Type: {{ content.type }}</p>
    <p>Summary: {{ content.summary }}</p>
    <NuxtLink :to="`/contents/${content.id}/edit`">Edit</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: content } = await useFetch(`/api/contents/${route.params.id}`)
</script>
