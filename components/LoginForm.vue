<template>
  <div class="w-full max-w-md mx-auto my-10">
    <form 
        class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        novalidate @submit.prevent="onSubmit" >
      <!-- <input v-model="user.username" placeholder="Username"> -->
      <!-- <input v-model="user.password" placeholder="Password" type="password"> -->
      <BaseInput v-model="user.username" :placeholder="'Username'" :type="'text'" />
      <BaseInput v-model="user.password" :placeholder="'Password'" :type="'password'" />
      <!-- <BaseInput :disabled="!isDisabled" :value="'Login'" :type="'submit'" autocomplete="off" class="button" /> -->
      <input 
        :disabled="!isDisabled" 
        class="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 mt-10 w-full rounded-full focus:outline-none focus:shadow-outline"
        type="submit" 
        value="Login" 
        autocomplete="off" 
        >
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue';
import { User } from '../types/User';
import BaseInput from '../components/BaseInput.vue';

const user = reactive<User>({
    username: '',
    password: '',
})

const isDisabled = computed(() => user.username !== "" && user.password !== "")

const router = useRouter();
const onSubmit = () => {
    router.push({ name: 'articles' });
};
</script>
