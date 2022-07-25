<template>
  <Wrapper>
    <h1 class="text-center my-5">Welcome to space news</h1>
    <div class="text-center">
      <a href="/login">
        <v-btn class="info">Login</v-btn>
      </a>
    </div>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../components/Wrapper.vue';


export default defineComponent ({
  name: 'App',
  components: {
    Wrapper,
  }
})
</script>
