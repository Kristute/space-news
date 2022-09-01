<template>
  <div>
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      class="disabled:bg-gray-400 disabled:cursor-default text-white font-bold py-2 px-4 mt-10 w-full rounded-full bg-pink-700 hover:bg-pink-900 focus:outline-stone-900 focus:shadow-outline cursor-pointer"
    />
  </div>
</template>
<script setup lang="ts">
interface PButtonProps {
  type: string
  value: string | number
  disabled: boolean
}

defineProps<PButtonProps>()
</script>
