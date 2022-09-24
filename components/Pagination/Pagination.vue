<template>
  <div
    v-if="props.itemsTotal > props.itemsPerPage"
    class="flex"
    aria-label="row pagination"
  >
    <ul
      v-if="numberOfPages >= 1"
      class="bg-white m-0 sm:p-2 flex items-center box-border overflow-hidden break-words content-center rounded-md text-xs sm:text-base"
    >
      <PaginationItem
        aria-label="go to previous page"
        :is-disabled="currentPage === 1"
        :src="arrowIcon"
        img-class="transform rotate-180"
        @click="previous()"
      />
      <PaginationItem
        v-for="(page, index) in pages"
        :key="`${index}-${page}`"
        :aria-label="`go to page ${page}`"
        :text="page"
        :number-class="{
          'bg-pink-900 text-white hover:border-none': currentPage === page,
        }"
        @click="setQueryParams(page)"
      />
      <PaginationItem
        aria-label="go to next page"
        :is-disabled="currentPage === numberOfPages || !numberOfPages"
        :src="arrowIcon"
        @click="next()"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import arrowIcon from '../../src/assets/icons/arrow.svg'

interface PaginationProps {
  itemsTotal: number
  itemsPerPage: number
}
const props = defineProps<PaginationProps>()
const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  return typeof route.query.page === 'string' ? parseInt(route.query.page) : 1
})

const numberOfPages = computed(() => {
  const newNumberOfPages = Math.ceil(props.itemsTotal / props.itemsPerPage)
  // if page does not exist after changing items per page - go to first page
  if (newNumberOfPages < currentPage.value) setQueryParams(1)
  return newNumberOfPages
})

const pages = computed(() => {
  const tempPages: (string | number)[] = [currentPage.value]
  // LEFT SIDE
  // if page 3 - show page before and first page
  if (currentPage.value === 3) {
    tempPages.unshift(currentPage.value - 2, currentPage.value - 1)
  }
  // if page bigger than 3 - show first, then dots and page before current
  if (currentPage.value > 3) {
    tempPages.unshift(1, '...', currentPage.value - 1)
  }
  // if page 2 - show first
  if (currentPage.value === 2) {
    tempPages.unshift(1)
  }
  // RIGHT SIDE
  // same as with page 3, just with last pages
  if (currentPage.value + 2 === numberOfPages.value) {
    tempPages.push(currentPage.value + 1, currentPage.value + 2)
  }
  // if other pages - show next page, then dots and last page
  if (currentPage.value + 2 < numberOfPages.value) {
    tempPages.push(currentPage.value + 1, '...', numberOfPages.value)
  }
  // if page before last page - show last page
  if (currentPage.value + 1 === numberOfPages.value) {
    tempPages.push(numberOfPages.value)
  }

  return tempPages
})

const setQueryParams = (page) => {
  router.push({
    path: '/articles',
    query: { page: page.toString(), amount: props.itemsPerPage.toString() },
  })
}

const previous = () => {
  if (currentPage.value === 1) return
  setQueryParams(currentPage.value - 1)
}

const next = () => {
  if (currentPage.value === numberOfPages.value) return
  setQueryParams(currentPage.value + 1)
}
</script>
