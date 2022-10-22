<template>
  <div class="w-full max-w-md mx-auto my-10">
    <form
      class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      novalidate
      @submit.prevent="onSubmit"
    >
      <span v-if="!checkIsValidUsername" class="text-red-600"
        >Username must contain only letters and numbers</span
      >
      <BaseInput
        v-model="user.username"
        placeholder="Username"
        type="text"
        class="mb-4"
        :class="{ 'border rounded border-red-500': !checkIsValidUsername }"
      />

      <div class="relative">
        <BaseInput
          v-model="user.password"
          placeholder="Password"
          type="password"
          autocomplete="off"
          class="mb-4"
        />
        <div class="pb-3">Your password must contain:</div>
        <ul class="bg-white p-3 rounded text-gray-500">
          <PasswordCriteria
            text="8 Characters"
            :is-criteria-accepted="hasMinimumLength"
          />
          <PasswordCriteria
            text="Contains Number"
            :is-criteria-accepted="hasNumber"
          />
          <PasswordCriteria
            text="Contains Uppercase"
            :is-criteria-accepted="hasUppercase"
          />
          <PasswordCriteria
            text="Contains Lowercase"
            :is-criteria-accepted="hasLowercase"
          />
          <PasswordCriteria
            text="Contains Special Character"
            :is-criteria-accepted="hasSpecial"
          />
        </ul>

        <div
          class="rounded-full absolute bg-green-500 w-12 h-12 -top-4 -right-4 flex justify-center items-center transition-opacity duration-500 ease-linear"
          :class="
            checkIsValidPassword ? 'visible opacity-100' : 'hidden opacity-0'
          "
        >
          <svg width="50%" height="50%" viewBox="0 0 140 100">
            <path
              class="checkmark w-full h-full fill-transparent stroke-white stroke-[15px]"
              stroke-linecap="round"
              :class="{ checked: checkIsValidPassword }"
              d="M10,50 l25,40 l95,-70"
            />
          </svg>
        </div>
      </div>
      <PrimaryButton
        :disabled="!isDisabled"
        type="submit"
        value="Login"
        class="mb-4"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
import { User } from '../types/User'

const { $store } = useNuxtApp()

const user = reactive<User>({
  username: '',
  password: '',
})

const checkIsValidUsername = computed(() =>
  /^[A-Za-z0-9]*$/.test(user.username)
)

const checkIsValidPassword = computed(
  () =>
    hasMinimumLength.value &&
    hasNumber.value &&
    hasUppercase.value &&
    hasLowercase.value &&
    hasSpecial.value
)

const hasMinimumLength = computed(() => user.password.length >= 8)

const hasNumber = computed(() => /\d/.test(user.password))

const hasUppercase = computed(() => /[A-Z]/.test(user.password))

const hasLowercase = computed(() => /[a-z]/.test(user.password))

const hasSpecial = computed(() =>
  /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(user.password)
)

const isDisabled = computed(
  () =>
    user.username !== '' &&
    user.password !== '' &&
    checkIsValidUsername.value &&
    checkIsValidPassword.value
)

const onSubmit = () => {
  $store.commit('auth/login', {
    username: user.username,
    password: user.password,
  })
}
</script>
<style scoped>
.checkmark {
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
}

.checked {
  animation: draw 0.5s ease forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
