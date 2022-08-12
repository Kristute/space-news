<template>
  <Wrapper>
      <div class="headline">
        <h1>Articles</h1>
      </div>
      <div v-if="pending">
        Loading ...
      </div>
      <div v-else>
        <SpaceArticle :articles="articles" />
      </div>
  </Wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SpaceArticle from '../../components/SpaceArticle.vue';
import Wrapper from '~/components/WrapperComponent.vue';

export default defineComponent ({
  components: {
    SpaceArticle,
    Wrapper,
  },
  setup() {
    const { pending, data: articles } = useLazyFetch('https://api.spaceflightnewsapi.net/v3/articles');
    return {
      pending,
      articles
    }
  },
})
</script>
<style lang="scss" scoped>
  .headline {
    text-align: center;
    margin: 50px;
  }
</style>
