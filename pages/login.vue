<template>
  <Wrapper>
    <h1 class="text-center my-5">Welcome to space news</h1>
    <LoginForm />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import Wrapper from '@/components/Wrapper.vue';

export default defineComponent ({
  name: 'LoginPage',
  components: {
    Wrapper,
    LoginForm,
  }
})
</script>
