<template>
  <WrapperComponent>
      <div class="text-center my-10">
        <h1>Articles</h1>
      </div>
      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        <SpaceArticle :articles="articles" />
      </div>
  </WrapperComponent>
</template>
<script setup lang="ts">
import { Article } from '../../types/Article';
const { pending, data: articles } = useLazyFetch<Array<Article>>('https://api.spaceflightnewsapi.net/v3/articles');
</script>
