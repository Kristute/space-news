<template>
  <select
    v-if="props.currentAmount"
    class="bg-gray-50 border border-gray-300 ml-auto text-pink-400 rounded py-2 px-4 font-bold block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    @change="changeCurrentAmount"
  >
    <option
      v-for="option in props.options"
      :key="option.label"
      :value="option.value"
      :selected="props.currentAmount === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

interface PerPageProps {
  options: Array<any>
  currentAmount: number
}
const props = defineProps<PerPageProps>()
const emit = defineEmits(['change-current-amount'])

const changeCurrentAmount = (event) => {
  emit('change-current-amount', event.target.value)
  loadAmount(event.target.value)
}

const loadAmount = (value) => {
  router.push({
    path: '/articles',
    query: { ...route.query, amount: value },
  })
}
</script>
