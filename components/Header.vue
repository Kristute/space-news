<template>
  <header>
    <nav
      class="bg-pink-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto w-full sm:w-4/5 max-w-screen-2xl"
      >
        <NuxtLink to="/articles" class="flex items-center">
          <img
            :src="rocketArrow"
            class="mr-3 h-6 sm:h-9"
            alt="Space News Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Space News</span
          >
        </NuxtLink>
        <div v-if="username" class="flex">
          <NuxtLink to="/articles" class="pr-2">
            <span
              class="self-center text-xl font-semibold whitespace-nowrap text-pink-900"
              >Articles</span
            >
          </NuxtLink>
          /
          <NuxtLink to="/reports" class="px-2">
            <span
              class="self-center text-xl font-semibold whitespace-nowrap text-pink-900"
              >Reports</span
            >
          </NuxtLink>
        </div>
        <div v-if="username" class="flex items-center lg:order-2">
          <div
            class="text-pink-900 text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 w-20 sm:w-40 lg:w-full overflow-hidden text-ellipsis"
          >
            {{ username }}
          </div>
          <button
            class="text-pink-100 rounded py-2 px-4 font-bold bg-pink-900 hover:text-pink-400 border-none cursor-pointer"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { computed, onMounted, useNuxtApp } from '@nuxt/bridge/dist/runtime'
import { parseCookies } from '../src/parseCookies'
import rocketArrow from '@/src/assets/icons/rocket.svg'

const { $store } = useNuxtApp()

onMounted(() => {
  if (document.cookie) {
    const loggedIn = parseCookies(document.cookie)

    const credentials = decodeURIComponent(loggedIn.user).split(':')[0]
    $store.commit('auth/authentication', credentials)
  }
})

const username = computed(() => {
  return $store.state.auth.username
})

const logout = () => {
  $store.commit('auth/logout')
}
</script>
