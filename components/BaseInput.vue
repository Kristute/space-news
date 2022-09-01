<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      @input="updateValue"
    />
  </div>
</template>
<script setup lang="ts">
interface InputProps {
  label?: string
  placeholder: string
  type: string
  value: string
}
defineProps<InputProps>()

const emit = defineEmits(['input'])
const updateValue = (event) => {
  emit('input', event.target.value)
}
</script>
