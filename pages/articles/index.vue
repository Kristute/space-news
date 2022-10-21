<template>
  <div>
    <Title text="Articles" />
    <ErrorMessage :error="error" />
    <div class="sm:flex">
      <Pagination
        v-if="totalArticlesCount !== 0"
        :items-total="totalArticlesCount"
        :items-per-page="currentAmount"
      />
      <PerPageSelect :options="amount" :current-amount="currentAmount" />
    </div>
    <div v-if="loadArticles.length === 0">Loading ...</div>
    <div v-else>
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { loadPageParams } from '../../src/loadPageParams'

const {
  articles,
  loadArticles,
  totalArticlesCount,
  error,
  currentAmount,
  amount,
} = loadPageParams('articles')
</script>
