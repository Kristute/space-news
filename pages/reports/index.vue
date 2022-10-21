<template>
  <div>
    <Title text="Reports" />
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
import { loadPageParams } from '../../src/loadPageParams'
import { Article } from 'types/Article'

interface ReportsProps {
  articles?: Article[]
}

defineProps<ReportsProps>()

const {
  articles,
  loadArticles,
  totalArticlesCount,
  error,
  currentAmount,
  amount,
} = loadPageParams('reports')
</script>
