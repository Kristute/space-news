<template>
  <WrapperComponent>
    <Header :text="'Welcome to Space News'"/>
    <LoginForm />
  </WrapperComponent>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
</script>