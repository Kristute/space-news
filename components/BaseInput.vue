<template>
    <div class="mb-4">
        <label v-if="label">{{ label }}</label>
        <input  
        :placeholder="placeholder" 
        :type="type" 
        :value="value"
        v-bind="$attrs"
        class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <!-- @input="$emit('update:value', ($event.target as HTMLInputElement).value)" -->
    </div>
</template>
<script setup lang="ts">
defineProps({
    label: {
        type: [String, Boolean],
        default: false,
    },
    placeholder: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    value: {
        type: [String, Number],
        default: '',
    } 
})

// const updateValue = (event) => {
//     return event.target.value;
//     // this.$emit('update:value', event.target?.value)
// }
</script>
