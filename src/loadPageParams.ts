import { useArticlesApi } from './useArticlesApi'

export function loadPageParams(data: string) {
  const route = useRoute()

  const pageParams = computed(() => ({
    page: route.query.page,
    amount: route.query.amount,
  }))
  
  watch(pageParams, () => {
    loadArticles(currentAmount, route.query.page || 1)
  })
  
  const currentAmount = computed(() => {
    return typeof route.query.amount === 'string'
      ? parseInt(route.query.amount)
      : 50
  })
  
  const amount = [
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 200, label: '200' },
  ]
  
  const { articles, loadArticles, totalArticlesCount, error } =
    useArticlesApi(data)
  
  onMounted(async () => await loadArticles(currentAmount, 1))
  
    return {
      articles,
      loadArticles,
      totalArticlesCount,
      error,
      currentAmount,
      amount
    };
  }
