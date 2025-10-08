<template>
  <div>
    <h1>Create Content Group</h1>
    <form @submit.prevent="createContentGroup">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newContentGroup.name" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="newContentGroup.description"></textarea>
      </div>
      <div>
        <label for="ref">Ref</label>
        <input type="text" id="ref" v-model="newContentGroup.ref" />
      </div>
      <div>
        <label for="source">Source</label>
        <input type="text" id="source" v-model="newContentGroup.source" />
      </div>
      <div>
        <label for="type">Type</label>
        <input type="text" id="type" v-model="newContentGroup.type" />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup>
const router = useRouter()
const newContentGroup = ref({
  name: '',
  description: '',
  ref: '',
  source: '',
  type: ''
})

const createContentGroup = async () => {
  await useFetch('/api/content-groups', {
    method: 'POST',
    body: newContentGroup.value
  })
  router.push('/content-groups')
}
</script>
