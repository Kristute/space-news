<template>
  <div v-if="errors.length" class="bg-red-700 text-white p-5 my-10 rounded-lg">
    <b>Error(s):</b>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
interface ErrorsProps {
  errors: string[]
}
defineProps<ErrorsProps>()
</script>
