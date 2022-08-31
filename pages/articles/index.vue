<template>
  <MainLayout>
    <Title :text="'Articles'" />
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <Pagination v-model="currentPage" :number-of-pages="numberOfPages" />
      <SpaceArticle :articles="articles" />
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Title from '../../components/Title.vue'
import { useArticlesApi } from '../../src/useArticlesApi'
import Pagination from '../../components/Pagination.vue'

const currentPage = ref(1)
const rowsPerPage = ref(4)

const { articles, articlesAreLoading, loadArticles, numberOfPages } =
  useArticlesApi(currentPage, rowsPerPage)

onMounted(async () => await loadArticles())
</script>
