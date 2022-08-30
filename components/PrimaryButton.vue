<template>
  <div class="mb-4">
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      class="bg-gray-400 text-white font-bold py-2 px-4 mt-10 w-full rounded-full"
      :class="{
        'bg-pink-700 hover:bg-pink-900 focus:outline-none focus:shadow-outline':
          disabled === false,
      }"
    />
  </div>
</template>
<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
