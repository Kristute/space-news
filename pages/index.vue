<template>
  <div>
    <h1>Welcome to space news</h1>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/login/LoginForm.vue';


export default defineComponent ({
  name: 'App',
  components: {
    LoginForm,
  }
})
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
  background: #F9F9F9;
}
.container {
  padding-top: 20px;
}
</style>
