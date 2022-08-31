<template>
  <div class="flex" aria-label="row pagination">
    <ul
      v-if="numberOfPages >= 1"
      class="bg-white m-0 p-2 flex items-center box-border overflow-hidden break-words content-center rounded-md"
    >
      <li
        class="flex cursor-pointer mb-0"
        aria-label="go to previous page"
        :class="{
          disabled: currentPage === 1,
        }"
        @click="previous()"
      >
        <span
          class="page-link text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none"
          >&laquo;</span
        >
      </li>
      <li
        v-for="index in numberOfPages"
        :key="index"
        :aria-label="'go to page ' + index"
        class="flex cursor-pointer mb-0"
        @click="setCurrentPage(index)"
      >
        <div
          class="page-link text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none"
          :class="{
            'bg-pink-900 text-white hover:border-none': currentPage === index,
          }"
        >
          {{ index }}
        </div>
      </li>
      <li
        class="flex cursor-pointer mb-0"
        :class="{
          disabled: currentPage === numberOfPages || !numberOfPages,
        }"
        aria-label="go to next page"
        @click="next()"
      >
        <div
          class="page-link text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none"
        >
          &raquo;
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps({
  numberOfPages: {
    required: true,
    type: Number,
  },
  modelValue: {
    required: true,
    type: Number,
  },
})

const { numberOfPages, modelValue: currentPage } = toRefs(props)

const emit = defineEmits(['update:modelValue'])

const setCurrentPage = (number: Number) => {
  emit('update:modelValue', number)
}

const previous = () => {
  if (currentPage.value === 1) return
  emit('update:modelValue', currentPage.value - 1)
}

const next = () => {
  if (currentPage.value >= numberOfPages.value) return
  emit('update:modelValue', currentPage.value + 1)
}
</script>

<style scoped lang="scss">
/* TODO: edit to tailwind class */
.disabled {
  .page-link {
    background-color: #f9fafb;
  }
  cursor: not-allowed;
}
</style>
