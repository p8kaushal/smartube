<template>
  <div>
    <h1>Edit Content Group</h1>
    <form @submit.prevent="updateContentGroup">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="contentGroup.name" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="contentGroup.description"></textarea>
      </div>
      <div>
        <label for="ref">Ref</label>
        <input type="text" id="ref" v-model="contentGroup.ref" />
      </div>
      <div>
        <label for="source">Source</label>
        <input type="text" id="source" v-model="contentGroup.source" />
      </div>
      <div>
        <label for="type">Type</label>
        <input type="text" id="type" v-model="contentGroup.type" />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { data: contentGroup } = await useFetch(`/api/content-groups/${route.params.id}`)

const updateContentGroup = async () => {
  await useFetch(`/api/content-groups/${route.params.id}`,
  {
    method: 'PUT',
    body: contentGroup.value
  })
  router.push('/content-groups')
}
</script>
