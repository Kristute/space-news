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
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { loadPageParams } from '../../src/loadPageParams'

const route = useRoute()

const {
  articles,
  totalArticlesCount,
  error,
  isLoading,
  currentAmount,
  amount,
} = loadPageParams(`${route.name}`)
</script>
