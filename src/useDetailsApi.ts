import { ref, Ref } from 'vue';
import { Article } from '../types/Article'
import { get } from './utils/client'

export function useDetailsApi(page: string, id: string) {
  const article = ref<Article>()
  const error: Ref<any> = ref()

  onMounted(async () => await loadArticlesDetail())

  const loadArticlesDetail = async () => {
    try {
      article.value = await get(`${page}s/${id}`);
    } catch (err) {
      error.value = err
    }
  };

  return {
    article,
    loadArticlesDetail,
    error
  };
}
