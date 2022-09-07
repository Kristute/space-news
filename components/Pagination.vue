<template>
  <div
    v-if="props.itemsTotal > props.itemsPerPage"
    class="flex"
    aria-label="row pagination"
  >
    <ul
      v-if="numberOfPages >= 1"
      class="bg-white m-0 p-2 flex items-center box-border overflow-hidden break-words content-center rounded-md"
    >
      <PaginationItem
        :aria-label="'go to previous page'"
        :disabled="{
          disabled: currentPage === 1,
        }"
        :src="require('../src/assets/img/arrow.svg')"
        :img-class="'transform rotate-180'"
        @click="previous()"
      />
      <PaginationItem
        v-for="index in numberOfPages"
        :key="index"
        :aria-label="'go to page ' + index"
        :number="index"
        :number-class="{
          'bg-pink-900 text-white hover:border-none': currentPage === index,
        }"
        @click="loadData(index)"
      />
      <PaginationItem
        :aria-label="'go to next page'"
        :disabled="{
          disabled: currentPage === numberOfPages || !numberOfPages,
        }"
        :src="require('../src/assets/img/arrow.svg')"
        @click="next()"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue'

interface PaginationProps {
  itemsTotal: number
  itemsPerPage: number
}
const props = defineProps<PaginationProps>()
const { query } = useRoute()
const router = useRouter()
const pageNumber = typeof query.page === 'string' ? parseInt(query.page) : 1

const currentPage: Ref<number> = ref(pageNumber)
const numberOfPages: Ref<number> = ref(
  Math.ceil(props.itemsTotal / props.itemsPerPage)
)

const emit = defineEmits(['load'])

const loadData = (page: number) => {
  currentPage.value = page
  router.push({ path: '/articles', query: { page: page.toString() } })
  emit('load', (page - 1) * props.itemsPerPage)
}

onMounted(async () => await loadData(currentPage.value))

const previous = () => {
  if (currentPage.value === 1) return
  loadData(currentPage.value - 1)
}

const next = () => {
  if (currentPage.value === numberOfPages.value) return
  loadData(currentPage.value + 1)
}
</script>
