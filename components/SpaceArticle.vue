<template>
  <v-container>
    <v-layout row>
      <v-col v-for="article in articles" :key="article.id" cols="12" sm="4" lg="3">
        <nuxt-link :to="`/articles/${ article.id }`">
          <v-card
            class="mx-auto d-flex flex-column"
            outlined
            hover
            height="350"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-img
                  :src="`${ article.imageUrl }`"
                  height="150px"
                  :alt="`${ article.title }`"
                >
                </v-img>
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
              <v-btn
                outlined
                rounded
                text
                class="cyan darken-4 white--text"
              >
                Read more
              </v-btn>
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
