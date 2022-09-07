<template>
  <li
    :class="{ disabled: props.disabled }"
    class="flex cursor-pointer mb-0 disabled:cursor-not-allowed"
    :aria-label="props.ariaLabel"
    @click="() => $emit('click')"
  >
    <div
      v-if="props.src"
      class="w-10 h-10 flex justify-center rounded font-bold hover:bg-pink-900 border-none disabled:bg-gray-400"
    >
      <img
        :src="props.src"
        :class="props.imgClass"
        class="w-3 h-3 self-center"
      />
    </div>

    <div
      v-else
      class="text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none disabled:bg-gray-400"
      :class="props.numberClass"
    >
      {{ props.number }}
    </div>
  </li>
</template>
<script lang="ts" setup>
interface PaginationItemProps {
  ariaLabel: string
  disabled: object
  number?: number
  src?: string
  imgClass: string
  numberClass: string
}
const props = defineProps<PaginationItemProps>()

defineEmits(['click'])
</script>
