<template>
  <WrapperComponent>
      <div class="headline">
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
  const { pending, data: articles } = useLazyFetch('https://api.spaceflightnewsapi.net/v3/articles');
</script>
<style lang="scss" scoped>
  .headline {
    text-align: center;
    margin: 50px;
  }
</style>
