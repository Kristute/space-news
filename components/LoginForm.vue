<template>
  <div class="w-full max-w-md mx-auto my-10">
    <form
      class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      novalidate
      @submit.prevent="onSubmit"
    >
      <BaseInput
        v-model="user.username"
        :placeholder="'Username'"
        :type="'text'"
        class="mb-4"
      />
      <BaseInput
        v-model="user.password"
        :placeholder="'Password'"
        :type="'password'"
        class="mb-4"
      />
      <PrimaryButton
        :disabled="!isDisabled"
        :type="'submit'"
        :value="'Login'"
        class="mb-4"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useCookie } from '@nuxt/bridge/dist/runtime'
import { User } from '../types/User'

const { $store } = useNuxtApp()
const router = useRouter()

const userCookie = useCookie('user')

const user = reactive<User>({
  username: '',
  password: '',
})

const isDisabled = computed(() => user.username !== '' && user.password !== '')

const onSubmit = () => {
  $store.commit('auth/login', {
    username: user.username,
    password: user.password,
  })
  userCookie.value = `${user.username}:${user.password}`
  sessionStorage.setItem('loggedUser', user.username)

  router.push({ path: '/articles' })
}
</script>
