<template>
  <div>
    <Title :text="'Articles'" />
    <ErrorMessage :error="error" />
    <div class="sm:flex">
      <Pagination
        v-if="totalArticlesCount !== 0"
        :items-total="totalArticlesCount"
        :items-per-page="currentAmount"
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

const pageParams = computed(() => ({
  page: route.query.page,
  amount: route.query.amount,
}))

watch(pageParams, () => {
  loadArticles(route.query.page)
})

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

loadArticles(1)
</script>
