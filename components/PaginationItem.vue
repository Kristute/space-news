<template>
  <li
    class="flex cursor-pointer mb-0 border-none"
    :aria-label="props.ariaLabel"
    @click="triggerClick()"
  >
    <div
      v-if="props.src"
      class="w-10 h-10 flex justify-center rounded font-bold hover:bg-pink-900 hover:text-pink-100"
      :class="{
        'hover:bg-transparent cursor-default': props.isDisabled === true,
      }"
    >
      <img
        :src="props.src"
        :class="props.imgClass"
        class="w-3 h-3 self-center"
      />
    </div>

    <button
      v-else
      :disabled="typeof props.text === 'string'"
      class="text-pink-400 rounded py-2 px-4 font-bold hover:bg-pink-900 hover:text-pink-100 border-none cursor-pointer disabled:bg-transparent disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-pink-400"
      :class="props.numberClass"
    >
      {{ props.text }}
    </button>
  </li>
</template>
<script lang="ts" setup>
interface PaginationItemProps {
  ariaLabel: string
  isDisabled?: boolean
  text?: string | number
  src?: string
  imgClass?: string
  numberClass?: Object
}
const props = defineProps<PaginationItemProps>()

const emit = defineEmits(['click'])

const triggerClick = () => {
  if (typeof props.text === 'string') return
  emit('click')
}
</script>
