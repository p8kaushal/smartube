<template>
  <div>
    <h1>{{ contentGroup.name }}</h1>
    <p>{{ contentGroup.description }}</p>
    <p>Ref: {{ contentGroup.ref }}</p>
    <p>Source: {{ contentGroup.source }}</p>
    <p>Type: {{ contentGroup.type }}</p>
    <NuxtLink :to="`/content-groups/${contentGroup.id}/edit`">Edit</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: contentGroup } = await useFetch(`/api/content-groups/${route.params.id}`)
</script>
