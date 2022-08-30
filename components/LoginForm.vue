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
      />
      <BaseInput
        v-model="user.password"
        :placeholder="'Password'"
        :type="'password'"
      />
      <PrimaryButton
        :disabled="!isDisabled"
        :type="'submit'"
        :value="'Login'"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
import { User } from '../types/User'
import BaseInput from '../components/BaseInput.vue'
import PrimaryButton from '../components/PrimaryButton.vue'

const user = reactive<User>({
  username: '',
  password: '',
})

const isDisabled = computed(() => user.username !== '' && user.password !== '')

const router = useRouter()
const onSubmit = () => {
  router.push({ name: 'articles' })
}
</script>
