<template>
    <div class="text-center my-10">
        <h1 class="text-pink-900 font-medium break-normal text-xl md:text-3xl uppercase">
            {{ props.text }}
        </h1>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: '',
    },
})
</script>