<template>
  <WrapperComponent>
    <v-container>
      <v-row v-if="article" no-gutters>
      <div class="flex flex-wrap mb-4">
        <div class="w-full md:w-1/3 lg:w-2/3">
          <img
            :src="`${ article.imageUrl }`"
            :alt="`${ article.title }`"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full md:w-2/3 lg:w-1/3 pt-10 md:pt-0">
          <div class="flex md:ml-10">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">Article #{{ id }}</h1>
            <div small class="rounded-full text-sm black--text bg-red-50 px-4 py-1">
              {{article.newsSite}}
            </div>
          </div>
          <div class="my-3 md:ml-10">
            <v-layout>
              <v-flex xs12 align-end d-flex>
                <span class="headline">{{ article.title }}</span>
              </v-flex>
            </v-layout>
            <article class="pt-12">
              {{ article.summary }}
            </article>
            <v-card-actions>

              <v-spacer></v-spacer>
              <button
              type="button"
              class="py-2 px-4 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <a :href="`${article.url }`" target="_blank" class="text-white text-sm font-medium">
                Read full article
                </a>
              </button>
            </v-card-actions>
          </div>
        </div>
        </div>
      </v-row>
      <!-- <v-layout row wrap align-center>
          <v-flex xs8 md5 offset-md1>

          </v-flex>
        </v-layout> -->
        <!-- maybe add section with other articles above -->
      </v-container>
   </WrapperComponent>
</template>
<script setup lang="ts">
import type Article from '../../types/Article';

const article = ref<Article>();
const route = useRoute();
const id = computed(() => route.params.id)

onMounted(() => {
  fetch('https://api.spaceflightnewsapi.net/v3/articles/' + id.value)
       .then(res => res.json())
       .then(a => {article.value = a})
})
</script>
