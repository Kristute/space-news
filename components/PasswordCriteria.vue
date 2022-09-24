<template>
  <li
    class="relative mb-3 before:w-0 before:h-px before:bg-green-500 before:absolute before:left-0 before:top-1/2 before:block before:ease-out before:duration-500"
    :class="{ 'text-gray-300 before:w-full is_valid': isCriteriaAccepted }"
  >
    {{ text }}
  </li>
</template>
<script lang="ts" setup>
interface CriteriaListProps {
  text: string
  isCriteriaAccepted: boolean
}
defineProps<CriteriaListProps>()
</script>
