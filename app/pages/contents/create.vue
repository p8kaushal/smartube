<template>
  <div>
    <h1>Create Content</h1>
    <form @submit.prevent="createContent">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="newContent.title" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" v-model="newContent.description"></textarea>
      </div>
      <div>
        <label for="url">URL</label>
        <input type="text" id="url" v-model="newContent.url" />
      </div>
      <div>
        <label for="thumbnail">Thumbnail</label>
        <input type="text" id="thumbnail" v-model="newContent.thumbnail" />
      </div>
      <div>
        <label for="type">Type</label>
        <input type="text" id="type" v-model="newContent.type" />
      </div>
      <div>
        <label for="summary">Summary</label>
        <textarea id="summary" v-model="newContent.summary"></textarea>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup>
const router = useRouter()
const newContent = ref({
  title: '',
  description: '',
  url: '',
  thumbnail: '',
  type: '',
  summary: ''
})

const createContent = async () => {
  await useFetch('/api/contents', {
    method: 'POST',
    body: newContent.value
  })
  router.push('/contents')
}
</script>
