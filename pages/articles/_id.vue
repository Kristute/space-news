<template>
  <WrapperComponent v-if="article">
      <div class="container flex text-sm md:text-base text-pink-700 py-5 mx-auto">
        <a href="/articles">Articles / </a>
        <p class="text-pink-900 font-bold">
          Article #{{ id }}
        </p>
      </div>
      <div class="container mx-auto">
        <Header :text="article.title" />
      </div>
      <div class="container md:max-w-3xl lg:max-w-5xl 2xl:max-w-screen-2xl md:flex mx-auto mt-8">
        <div class="md:w-1/2 mx-0 sm:mx-6 md:pr-8 xl:pr-24">
          <div class="w-full text-lg md:text-xl text-gray-800 leading-normal indent-10 text-justify">
              {{ article.summary }}...
          </div>
          <div class="lg:flex pt-10 mb-10 justify-between">
            
            <a :href="`${article.url }`" target="_blank">
              <button 
                target="_blank" 
                class="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 mt-5 lg:mt-0 rounded-full focus:outline-none focus:shadow-outline w-full lg:w-auto"
              >
                Read full article >
              </button>
            </a>
          </div>
        </div>
        <div  class="md:w-1/2">
          <img :src="article.imageUrl" :alt="`${ article.title }`" class="h-96 w-full object-cover" />
          <div class="flex">
            <p class="text-gray-800 py-2 px-4 rounded-full ml-auto mt-5 uppercase">
              {{article.newsSite}}
            </p>
          </div>
        </div>
      </div>
        <!-- maybe add section with other articles above -->
  </WrapperComponent>
</template>
<script setup lang="ts">
import { Article } from '../../types/Article';
import Header from '../../components/Header.vue';

const article = ref<Article>();
const route = useRoute();
const id = computed(() => route.params.id)

onMounted(() => {
  fetch('https://api.spaceflightnewsapi.net/v3/articles/' + id.value)
       .then(res => res.json())
       .then(a => {article.value = a})
})
</script>
