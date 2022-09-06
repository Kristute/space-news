<template>
  <div>
    <Title :text="'Articles'" />
    <Pagination
      v-if="totalArticlesCount !== 0"
      :items-total="totalArticlesCount"
      :items-per-page="LIMIT"
      @load="loadArticles"
    />
    <div v-if="loadArticles.length === 0">Loading ...</div>
    <div v-else>
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useArticlesApi } from '../../src/useArticlesApi'

const LIMIT = 50

const { articles, loadArticles, totalArticlesCount } = useArticlesApi(LIMIT)
</script>
