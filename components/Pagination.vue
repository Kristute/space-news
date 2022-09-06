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
      <!-- TODO: move to custom component -->
      <li
        class="flex cursor-pointer mb-0 disabled:cursor-not-allowed"
        aria-label="go to previous page"
        :disabled="{
          disabled: currentPage === 1,
        }"
        @click="previous()"
      >
        <div
          class="text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none disabled:bg-gray-400"
          :class="{
            disabled: currentPage === 1,
          }"
        >
          &laquo;
        </div>
      </li>
      <li
        v-for="index in numberOfPages"
        :key="index"
        :aria-label="'go to page ' + index"
        class="flex cursor-pointer mb-0"
        @click="loadData(index)"
      >
        <div
          class="text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none disabled:bg-gray-400"
          :class="{
            'bg-pink-900 text-white hover:border-none': currentPage === index,
          }"
        >
          {{ index }}
        </div>
      </li>
      <li
        class="flex cursor-pointer mb-0 disabled:cursor-not-allowed"
        :class="{
          disabled: currentPage === numberOfPages || !numberOfPages,
        }"
        aria-label="go to next page"
        @click="next()"
      >
        <div
          class="text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none disabled:bg-gray-400"
        >
          &raquo;
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from 'vue'

interface PaginationProps {
  itemsTotal: number
  itemsPerPage: number
  load: Function
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
