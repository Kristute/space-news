import { ref, Ref, onMounted } from 'vue';
import { Article } from '../types/Article'
import { get } from './utils/client'

interface ArticlesProps {
  articles: Article[]
}

export function useArticlesApi(
  itemPerPage: number,
) {
  const articles: Ref<ArticlesProps[]> = ref([]);
  const totalArticlesCount: Ref<number> = ref(0);

  onMounted(async () => await loadArticlesCount())
  
  const loadArticles = async (startMarker) => {
    try {
      articles.value = await get(`articles?_limit=${itemPerPage}&_start=${startMarker}`);
    } catch (err) {
      console.log(err);
    }
  }

  const loadArticlesCount = async () => {
    try {
      totalArticlesCount.value = await get('articles/count');
    } catch (err) {
      console.log(err);
    }
  };
  
  return {
    articles,
    loadArticles,
    totalArticlesCount,
  };
}
