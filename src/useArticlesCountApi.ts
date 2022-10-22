import { ref, Ref, onMounted } from 'vue';
import { get } from './utils/client'

export function useArticlesCountApi(page: string) {
  const totalArticlesCount: Ref<number> = ref(0);
  const errorCount: Ref<any> = ref()
  const isLoadingCount = ref(false) // should be true

  onMounted(async () => await loadArticlesCount())

  const loadArticlesCount = async () => {
    isLoadingCount.value = true
    try {
      totalArticlesCount.value = await get(`${page}/count`);
    } catch (err) {
        errorCount.value = err
    }
    isLoadingCount.value = false
  };

  return {
    totalArticlesCount,
    errorCount,
    isLoadingCount
  };
}
