<template>
  <WrapperComponent>
      <Header :text="'Articles'" />
      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        <SpaceArticle :articles="articles" />
      </div>
  </WrapperComponent>
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue';
import { Article } from '../../types/Article';

const { pending, data: articles } = useLazyFetch<Array<Article>>('https://api.spaceflightnewsapi.net/v3/articles');
</script>
