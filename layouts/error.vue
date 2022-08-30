<template>
    <div class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-pink-600 to-pink-400">
        <div class="px-40 py-20 bg-white rounded-md shadow-xl">
            <div class="flex flex-col items-center">
                <div class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                </div>
                <div v-if="props.error?.statusCode === '404'">
                    <h1 class="font-bold text-pink-600 text-9xl">404</h1>

                    <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span class="text-red-500">Oops!</span> Page not found
                    </h6>

                    <p class="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>
                </div>
                <div v-else class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    An error occurred
                </div>
                <NuxtLink to="/" class="px-6 py-2 text-sm font-semibold text-pink-800 bg-pink-100">
                    Home page
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface ErrorPageProps {
        error: {
            statusCode: string;
        };
    }

    const props = defineProps<ErrorPageProps>();
</script>
