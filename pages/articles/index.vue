<template>
      <div>
        <h1>Articles Page</h1>
              <div v-if="pending">
                Loading ...
              </div>
              <div v-else>
                  <ul class="articles-list"> 
                    <li v-for="article in articles" :key="article.id" class="article-item">
                      {{ article.title }}
                      <SpaceArticle />
                    </li>
                  </ul>
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
  
</style>
