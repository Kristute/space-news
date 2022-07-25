<template>
  <Wrapper>
    <LoginForm />
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';
import Wrapper from '@/components/Wrapper.vue';

export default defineComponent ({
  name: 'Login',
  components: {
    LoginForm,
    Wrapper,
  }
})
</script>
