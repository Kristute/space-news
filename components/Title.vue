<template>
  <div class="text-center my-10">
    <h1
      class="text-pink-900 font-medium break-normal text-xl md:text-3xl uppercase"
    >
      {{ text }}
    </h1>
  </div>
</template>
<script setup lang="ts">
interface TitleProps {
  text: string
}
defineProps<TitleProps>()
</script>
