<template>
      <div>
        <h1>Article #{{ id }}</h1>
        <div>{{ article }}</div>
        <!-- <a :href="`${article.url }`" target="_blank">Read full article </a> -->
      </div>
</template>
<script>
    export default {
      data() {
        return {
          article: []
        }
      },
      async fetch() {
        this.article = await fetch('https://api.spaceflightnewsapi.net/v3/articles/' + this.id).then(res =>
          res.json()
        )
      },
      head() {
        return {
          title: 'Article #' + this.id,
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'What you need to know about Article #' + this.id
            }
          ]
        }
      },
      computed: {
        id() {
          return this.$route.params.id
        }
      }
    }
</script>