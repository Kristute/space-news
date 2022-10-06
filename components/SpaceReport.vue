<template>
  <div class="flex flex-wrap -mx-4">
    <div
      v-for="article in props.articles"
      :key="article.id"
      class="w-full sm:w-1/2 p-4"
    >
      <nuxt-link
        :to="`/reports/${article.id}`"
        class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div>
          <div class="px-6 py-4">
            <h2 class="font-bold text-lg mb-2">
              {{ article.title }}
            </h2>
            <div class="text-gray-700 text-base block">
              <p>Published: {{ formatDate(article.publishedAt) }}</p>

              <p>Updated: {{ formatDate(article.updatedAt) }}</p>
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
import { formatDate } from '~/src/utils/filters'

interface ReportsProps {
  articles: Article[]
}

const props = defineProps<ReportsProps>()
</script>
