<template>
  <div>
    <div>
      <li v-for="article in props.articles" :key="article.id">
        <nuxt-link :to="`/articles/${ article.id }`">
          <div class="mx-auto d-flex flex-column">
            <div>
              <div>
                <img :src="`${ article.imageUrl }`" :alt="`${ article.title }`" />
                <h2 class="text-h5 mb-1">
                    {{ article.title }}
                </h2>
                <div>
                  Published: {{ article.publishedAt }}
                </div>
                <div>
                  Updated: {{ article.updatedAt }}
                </div>
              </div>
            </div>

            <div class="align-end">
              <button class="cyan darken-4 white--text" >
                Read more
              </button>
            </div>
          </div>
        </nuxt-link>
      </li>
    </div>
  </div>         
</template>
<script setup lang="ts">
import { Article } from '../types/Article';

interface ArticlesProps {
    articles: Article[];
}

const props = defineProps<ArticlesProps>();
</script>
