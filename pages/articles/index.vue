<template>
  <div>
    <Title :text="'Articles'" />
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <Pagination v-model="currentPage" :number-of-pages="numberOfPages" />
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useArticlesApi } from '../../src/useArticlesApi'

const currentPage = ref(1)
const rowsPerPage = ref(4)

const { articles, articlesAreLoading, loadArticles, numberOfPages } =
  useArticlesApi(currentPage, rowsPerPage)

onMounted(async () => await loadArticles())
</script>
