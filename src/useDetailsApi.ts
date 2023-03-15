import { onMounted, ref, Ref } from 'vue'
import { Article } from '../types/Article'
import { get } from './utils/client'

export function useDetailsApi(page: string, id: string) {
  const article = ref<Article>()
  const error: Ref<any> = ref()
  const isLoading = ref(true) // true because it is called in onMounted

  onMounted(async () => await loadArticlesDetail())

  const loadArticlesDetail = async () => {
    isLoading.value = true
    try {
      article.value = await get(`${page}s/${id}`)
    } catch (err) {
      error.value = err
    }
    isLoading.value = false
  }

  return {
    article,
    loadArticlesDetail,
    error,
    isLoading,
  }
}
