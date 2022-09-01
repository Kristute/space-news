<template>
  <div>
    <Title :text="'Articles'" />
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <SpaceArticle :articles="articles" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Article } from '../../types/Article'

const { pending, data: articles } = useLazyFetch<Array<Article>>(
  'https://api.spaceflightnewsapi.net/v3/articles'
)
</script>
