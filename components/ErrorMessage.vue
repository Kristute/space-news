<template>
  <div v-if="error" class="bg-red-700 text-white p-5 my-10 rounded-lg">
    <b>Error(s):</b>
    <div>{{ error }}</div>
  </div>
</template>
<script setup lang="ts">
interface ErrorsProps {
  error: string
}
defineProps<ErrorsProps>()
</script>
