<template>
  <div>
    <h1>Edit Content</h1>
    <form @submit.prevent="updateContent">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="content.title" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="content.description"></textarea>
      </div>
      <div>
        <label for="url">URL</label>
        <input type="text" id="url" v-model="content.url" />
      </div>
      <div>
        <label for="thumbnail">Thumbnail</label>
        <input type="text" id="thumbnail" v-model="content.thumbnail" />
      </div>
      <div>
        <label for="type">Type</label>
        <input type="text" id="type" v-model="content.type" />
      </div>
      <div>
        <label for="summary">Summary</label>
        <textarea id="summary" v-model="content.summary"></textarea>
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const { data: content } = await useFetch(`/api/contents/${route.params.id}`)

const updateContent = async () => {
  await useFetch(`/api/contents/${route.params.id}`,
  {
    method: 'PUT',
    body: content.value
  })
  router.push('/contents')
}
</script>
