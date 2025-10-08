<template>
  <div>
    <h1>Content Groups</h1>
    <NuxtLink to="/content-groups/create">Create Content Group</NuxtLink>
    <ul>
      <li v-for="contentGroup in contentGroups" :key="contentGroup.id">
        <NuxtLink :to="`/content-groups/${contentGroup.id}`">{{ contentGroup.id }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: contentGroups } = await useFetch('/api/content-groups')
</script>
