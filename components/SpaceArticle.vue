<template>
  <div class="flex flex-wrap -mx-4">
    <div
      v-for="article in props.articles"
      :key="article.id"
      class="w-full sm:w-1/2 xl:w-1/4 p-4"
    >
      <nuxt-link
        :to="`/articles/${article.id}`"
        class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div>
          <img
            :src="`${article.imageUrl}`"
            :alt="`${article.title}`"
            class="w-full h-60 object-cover"
          />
          <div class="px-6 py-4">
            <h2
              class="font-bold text-lg mb-2 max-h-14 overflow-hidden text-ellipsis whitespace-nowrap w-80"
            >
              {{ article.title }}
            </h2>
            <div class="text-gray-700 text-base block">
              <p>Published: {{ article.publishedAt | formatDate }}</p>

              <p>Updated: {{ article.updatedAt | formatDate }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end px-6 pb-4">
          <button
            class="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Read more >
          </button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Article } from '../types/Article'

interface ArticlesProps {
  articles: Article[]
}

const props = defineProps<ArticlesProps>()
</script>
