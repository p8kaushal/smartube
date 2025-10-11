<template>
  <div>
    <h1>Content Groups</h1>
    <NuxtLink to="/content-groups/create">Create Content Group</NuxtLink>
    <UTable :data="contentGroups" class="flex-1" />
  </div>
</template>

<script setup>
const { data: contentGroups } = await useFetch('/api/content-groups')
</script>
