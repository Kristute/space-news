<template>
  <div>
    <Title text="Reports" />
    <ErrorMessage :error="error" />
    <div class="sm:flex">
      <Pagination
        v-if="totalArticlesCount !== 0"
        :items-total="totalArticlesCount"
        :items-per-page="currentAmount"
        page-name="reports"
      />
      <PerPageSelect
        :options="amount"
        :current-amount="currentAmount"
        page-name="reports"
      />
    </div>
    <div v-if="loadArticles.length === 0">Loading ...</div>
    <div v-else>
      <div class="my-4">
        <img
          :src="`${articles[0]?.imageUrl}`"
          :alt="`${articles[0]?.title}`"
          class="w-full h-60 object-cover"
        />
      </div>
      <SpaceReport :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useArticlesApi } from '../../src/useArticlesApi'
import { Article } from 'types/Article'

interface ArticlesProps {
  articles: Article[]
}

defineProps<ArticlesProps>()

const route = useRoute()

const pageParams = computed(() => ({
  page: route.query.page,
  amount: route.query.amount,
}))

watch(pageParams, () => {
  loadArticles(currentAmount, route.query.page || 1)
})

const currentAmount = computed(() => {
  return typeof route.query.amount === 'string'
    ? parseInt(route.query.amount)
    : 50
})

const amount = [
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
]

const { articles, loadArticles, totalArticlesCount, error } =
  useArticlesApi('reports')

loadArticles(currentAmount, 1)
</script>
