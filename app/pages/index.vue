<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Welcome to SmarTube</h1>
    <p class="text-lg text-gray-600 mb-12">Your personalized YouTube experience.</p>
    <div class="space-x-4">
      <router-link to="/content-groups"
        class="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300">Content
        Group</router-link>
      <router-link to="/contents"
        class="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">Content</router-link>
    </div>
  </div>
</template>

<script setup>
// No script needed for this simple landing page
</script>

<style scoped>
/* No specific styles needed beyond Tailwind CSS */
</style>
