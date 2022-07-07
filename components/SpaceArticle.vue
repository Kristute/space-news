<template>
  <div class="md-card">
    <!-- <nuxt-link :to="`/articles/${article.id}`"> -->
    <!-- {{ article.title }} -->
      
    <!-- </nuxt-link> -->
  </div>            
</template>
<script>

export default defineComponent({
  props: {
    articles: {
      type: Object,
      default: null
    } 
  }
})
</script>

