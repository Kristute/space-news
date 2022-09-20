<template>
  <div>
    <Header />
    <main
      role="main"
      class="w-full sm:w-4/5 max-w-screen-2xl pt-1 px-2 mx-auto"
    >
      <Nuxt />
    </main>
  </div>
</template>
<script lang="ts" setup>
const { $store } = useNuxtApp()
const route = useRoute()
const pageParams = computed(() => route.path)

watch(pageParams, () => {
  localStorage.setItem('path', JSON.stringify(route.path))
})

onMounted(() => {
  const token = localStorage.getItem('token')

  if (token) {
    $store.commit('auth/authenticate', JSON.parse(token))
  }
})
</script>
