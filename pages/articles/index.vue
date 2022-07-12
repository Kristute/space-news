<template>
      <div>
        <v-layout justify-center>
          <v-card-title primary justify-center class="headline justify-center">
            Articles Page
          </v-card-title>
        </v-layout>
          <div v-if="pending">
            Loading ...
          </div>
          <div v-else>
            <SpaceArticle :articles="articles" />
          </div>
          <!-- <h4 v-if="articles.length === 0">Empty list.</h4> -->
      </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SpaceArticle from '../../components/SpaceArticle.vue';

export default defineComponent ({

  components: {
    SpaceArticle,
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
    width: 100%;
  }
</style>
