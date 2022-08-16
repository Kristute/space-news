<template>
  <v-container>
    <v-layout row>
      <v-col v-for="article in articles" :key="article.id" cols="12" sm="4" lg="3">
        <nuxt-link :to="`/articles/${ article.id }`">
          <v-card
            class="max-w-sm rounded overflow-hidden shadow-lg mb-4"
            hover
            min-height="450"
          >
            <img
              :src="`${ article.imageUrl }`"
              :alt="`${ article.title }`"
              class="h-72 w-full object-cover"
            />
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                    {{ article.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Published: {{ article.publishedAt }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Updated: {{ article.updatedAt }}
                  </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions class="align-end">
              <button
                class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Read more
              </button>
            </v-card-actions>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-layout>
  </v-container>         
</template>
<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue'
import Article from '../types/Article';

export default defineComponent({
  props: {
    articles: {
      type: Array as PropType<Array<Article>>,
      default: null
    } 
  }
})
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
