<template>
  <div>
    <Title :text="'Articles'" />
    <ErrorMessage :errors="errors" />
    <div class="sm:flex">
      <Pagination
        v-if="totalArticlesCount !== 0"
        :items-total="totalArticlesCount"
        :items-per-page="currentAmount"
        @load="loadArticles"
      />
      <PerPageSelect
        :options="amount"
        :current-amount="currentAmount"
        @change-current-amount="loadAmount"
      />
    </div>
    <div v-if="loadArticles.length === 0">Loading ...</div>
    <div v-else>
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue'
import { useArticlesApi } from '../../src/useArticlesApi'

const currentAmount: Ref<number> = ref(50)
const loadAmount = (value) => {
  currentAmount.value = parseInt(value)
}

const amount = [
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
]

const { articles, loadArticles, totalArticlesCount, errors } =
  useArticlesApi(currentAmount)
</script>
