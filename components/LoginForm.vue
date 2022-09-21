<template>
  <div class="w-full max-w-md mx-auto my-10">
    <form
      class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      novalidate
      @submit.prevent="onSubmit"
    >
      <span
        class="text-red-600"
        :class="checkIsValidUsername ? 'hidden' : 'visible'"
        >Username must contain only letters and numbers</span
      >
      <BaseInput
        v-model="user.username"
        :placeholder="'Username'"
        :type="'text'"
        class="mb-4"
        :class="{ 'border rounded border-red-500': !checkIsValidUsername }"
      />

      <div class="relative">
        <BaseInput
          v-model="user.password"
          :placeholder="'Password'"
          :type="'password'"
          autocomplete="off"
          class="mb-4"
        />
        <div class="pb-3">Your password must contain:</div>
        <ul class="bg-white p-3 rounded text-gray-500">
          <PasswordCriteria
            :text="'8 Characters'"
            :is-criteria-accepted="checkMinimumLength"
          />
          <PasswordCriteria
            :text="'Contains Number'"
            :is-criteria-accepted="checkNumber"
          />
          <PasswordCriteria
            :text="'Contains Uppercase'"
            :is-criteria-accepted="checkUppercase"
          />
          <PasswordCriteria
            :text="'Contains Lowercase'"
            :is-criteria-accepted="checkLowerCase"
          />
          <PasswordCriteria
            :text="'Contains Special Character'"
            :is-criteria-accepted="checkSpecial"
          />
        </ul>

        <div
          class="checkmark_container"
          :class="
            checkIsValidPassword ? 'visible opacity-100' : 'hidden opacity-0'
          "
        >
          <svg width="50%" height="50%" viewBox="0 0 140 100">
            <path
              class="checkmark"
              :class="{ checked: checkIsValidPassword }"
              d="M10,50 l25,40 l95,-70"
            />
          </svg>
        </div>
      </div>

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
import { User } from '../types/User'
import PasswordCriteria from './PasswordCriteria.vue'

const { $store } = useNuxtApp()
const router = useRouter()

const user = reactive<User>({
  username: '',
  password: '',
})

const checkIsValidUsername = computed(() => {
  let isUsernameValid = ref(false)

  isUsernameValid = ref(/^[A-Za-z0-9]*$/.test(user.username))

  return isUsernameValid.value
})

const checkIsValidPassword = computed(() => {
  let isValidPassword = ref(false)

  if (
    checkMinimumLength.value === true &&
    checkNumber.value === true &&
    checkUppercase.value === true &&
    checkLowerCase.value === true &&
    checkSpecial.value === true
  ) {
    isValidPassword = ref(true)
  }

  return isValidPassword.value
})

const checkMinimumLength = computed(() => {
  let hasMinimumLength = ref(false)
  if (user.password.length >= 8) {
    hasMinimumLength = ref(true)
  } else {
    hasMinimumLength = ref(false)
  }

  return hasMinimumLength.value
})

const checkNumber = computed(() => {
  let hasNumber = ref(false)

  hasNumber = ref(/\d/.test(user.password))

  return hasNumber.value
})

const checkUppercase = computed(() => {
  let hasUppercase = ref(false)

  hasUppercase = ref(/[A-Z]/.test(user.password))

  return hasUppercase.value
})

const checkLowerCase = computed(() => {
  let hasLowercase = ref(false)

  hasLowercase = ref(/[a-z]/.test(user.password))

  return hasLowercase.value
})

const checkSpecial = computed(() => {
  const format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
  let hasSpecial = ref(false)

  hasSpecial = ref(format.test(user.password))

  return hasSpecial.value
})

const isDisabled = computed(
  () =>
    user.password !== '' &&
    checkIsValidUsername.value === true &&
    checkIsValidPassword.value === true
)

const onSubmit = () => {
  $store.commit('auth/login', {
    username: user.username,
    password: user.password,
  })
  router.push({ name: 'articles' })
}
</script>
<style>
.checkmark_container {
  border-radius: 50%;
  position: absolute;
  top: -15px;
  right: -15px;
  background: #2ecc71;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s ease;
}

.checkmark {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: white;
  stroke-width: 15;
  stroke-linecap: round;
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
