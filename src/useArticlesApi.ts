import { ref, Ref } from 'vue';
import { Article } from '../types/Article'
import { get } from './utils/client'

interface ArticlesProps {
  articles: Article[]
}

export function useArticlesApi(page: string) {
  const articles: Ref<ArticlesProps[]> = ref([]);
  let errorArticles: any;
  const isLoadingArticles = ref(false)

  const loadArticles = async (articlesLimit, startMarker) => {
    isLoadingArticles.value = true
    try {
      articles.value = await get(`${page}?_limit=${articlesLimit.value}&_start=${startMarker}`);
    } catch (err) {
      errorArticles = err
    }
    isLoadingArticles.value = false
  }

  return {
    articles,
    loadArticles,
    errorArticles,
    isLoadingArticles
  };
}
