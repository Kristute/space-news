<template>
  <WrapperComponent>
      <div v-if="article">
        <h1>Article #{{ id }}</h1>
      </div>
      <div class="row wrap align-center">
          <div>
              <div v-if="article" class="my-3">
                <img :src="article.imageUrl" :alt="`${ article.title }`" />
                <div>
                  <span class="headline">{{ article.title }}</span>
                </div>
                <div>
                  {{ article.summary }}
                </div>
                <div>
                  <div small color="secondary" class="white--text">
                    {{article.newsSite}}
                  </div>
                  <button small replace color="info" :href="article.url" target="_blank" >
                    <a :href="`${article.url }`" target="_blank">Read full article </a>
                  </button>
                </div>
              </div>
          </div>
        <!-- maybe add section with other articles above -->
      </div>
  </WrapperComponent>
</template>
<script setup lang="ts">
import { Article } from '../../types/Article';

const article = ref<Article>();
const route = useRoute();
const id = computed(() => route.params.id)

onMounted(() => {
  fetch('https://api.spaceflightnewsapi.net/v3/articles/' + id.value)
       .then(res => res.json())
       .then(a => {article.value = a})
})
</script>
