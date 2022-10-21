import { ref, Ref, onMounted } from 'vue';
import { Article } from '../types/Article'
import { get } from './utils/client'

interface ArticlesProps {
  articles: Article[]
}

export function useArticlesApi(page: string) {
  const articles: Ref<ArticlesProps[]> = ref([]);
  const totalArticlesCount: Ref<number> = ref(0);
  let error: any;

  onMounted(async () => await loadArticlesCount())

  const loadArticles = async (articlesLimit, startMarker) => {
    try {
      articles.value = await get(`${page}?_limit=${articlesLimit.value}&_start=${startMarker}`);
    } catch (err) {
      error = err
    }
  }

  const loadArticlesCount = async () => {
    try {
      totalArticlesCount.value = await get(`${page}/count`);
    } catch (err) {
      error = err
    }
  };

  return {
    articles,
    loadArticles,
    totalArticlesCount,
    error
  };
}
