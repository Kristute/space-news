<template>
  <div>
    <Title :text="'Articles'" />
    <ErrorMessage :error="error" />
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
import { useArticlesApi } from '../../src/useArticlesApi'
const route = useRoute()
const router = useRouter()

const currentAmount = computed(() => {
  return typeof route.query.amount === 'string'
    ? parseInt(route.query.amount)
    : 50
})

const loadAmount = (value) => {
  router.push({
    path: '/articles',
    query: { ...route.query, amount: value },
  })
}

const amount = [
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
]

const { articles, loadArticles, totalArticlesCount, error } =
  useArticlesApi(currentAmount)
</script>
