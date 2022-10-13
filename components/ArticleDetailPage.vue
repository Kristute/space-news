<template>
  <div>
    <ErrorMessage :error="error" />
    <div v-if="article">
      <div class="flex text-sm md:text-base text-pink-700 py-5 mx-auto">
        <NuxtLink :to="`/${articleType}s`" class="capitalize"
          >{{ articleType }}s /
        </NuxtLink>
        <p class="text-pink-900 font-bold capitalize pl-1">
          {{ articleType }} #{{ id }}
        </p>
      </div>
      <Title :text="article.title" />
      <div class="md:flex mt-8">
        <div class="md:w-1/2 mx-0 sm:mr-6 md:pr-8 xl:pr-24">
          <div
            class="w-full text-lg md:text-xl text-gray-800 leading-normal indent-10 text-justify"
          >
            {{ article.summary }}...
          </div>
          <div class="lg:flex pt-10 mb-10 justify-between">
            <a :href="`${article.url}`" target="_blank">
              <button
                target="_blank"
                class="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 mt-5 lg:mt-0 rounded-full focus:outline-none focus:shadow-outline w-full lg:w-auto"
              >
                Read full {{ articleType }} >
              </button>
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <img
            :src="article.imageUrl"
            :alt="`${article.title}`"
            class="h-96 w-full object-cover"
          />
          <div class="flex">
            <p
              class="text-gray-800 py-2 px-4 rounded-full ml-auto mt-5 uppercase"
            >
              {{ article.newsSite }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue'
import { Article } from '../types/Article'
interface ArticleDetailProps {
  articleType: string
}
const props = defineProps<ArticleDetailProps>()

const article = ref<Article>()
const route = useRoute()
const id = computed(() => route.params.id)
const error: Ref<any> = ref()

onMounted(() => {
  fetch(
    'https://api.spaceflightnewsapi.net/v3/' +
      props.articleType +
      's/' +
      id.value
  )
    .then((res) => res.json())
    .then((a) => {
      article.value = a
    })
    .catch((err) => {
      error.value = err
    })
})
</script>
