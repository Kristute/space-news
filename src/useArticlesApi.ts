import { ref, Ref } from 'vue';
import axios from 'axios';

import { usePagination } from '../src/useClientSidePagination';
import { Article } from '../types/Article'

interface ArticlesProps {
  articles: Article[]
}

const URL = "https://api.spaceflightnewsapi.net/v3/articles/";

export function useArticlesApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>
) {
  const articles: Ref<ArticlesProps[]> = ref([]);

  const articlesAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = usePagination<ArticlesProps>({
    rowsPerPage,
    arrayToPaginate: articles,
    currentPage
  });

  const loadArticles = async () => {
    articlesAreLoading.value = true;
    try {
      const result = await axios.get(URL);
      articles.value = result.data;
    } catch (err) {
      console.log(err);
    } finally {
        articlesAreLoading.value = false;
    }
  };

  return {
    articles: paginatedArray,
    loadArticles,
    articlesAreLoading,
    numberOfPages
  };
}