<template>
  <WrapperComponent>
    <h1 class="text-center my-5">Welcome to space news</h1>
    <LoginForm />
  </WrapperComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import WrapperComponent from '~/components/WrapperComponent.vue';

export default defineComponent ({
  name: 'LoginPage',
  components: {
    WrapperComponent,
    LoginForm,
  }
})
</script>
