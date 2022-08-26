<template>
  <div class="flex flex-wrap mb-4 ml-2 mr-9 xl:ml-10 xl:mr-0">
    <div 
      v-for="article in props.articles" 
      :key="article.id" 
      class="sm:w-full md:w-1/2 lg:w-1/3 max-w-sm mb-10 ml-5 2xl:ml-10 rounded overflow-hidden shadow-lg flex"
    >
      <nuxt-link :to="`/articles/${ article.id }`" class="flex flex-col justify-between">
        <div>
            <img 
              :src="`${ article.imageUrl }`" 
              :alt="`${ article.title }`" 
              class="w-full h-60 object-cover"  
            />
            <div class="px-6 py-4">
              <h2 class="font-bold text-lg mb-2 max-h-14 overflow-hidden text-ellipsis whitespace-nowrap w-80">
                  {{ article.title }}
              </h2>
              <div class="text-gray-700 text-base">
                Published: {{ article.publishedAt }}
              
                Updated: {{ article.updatedAt }}
              </div>
            </div>
        </div>
        <div class="flex justify-end px-6 pb-4">
            <button class="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
              Read more >
            </button>
        </div>
      </nuxt-link>
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
