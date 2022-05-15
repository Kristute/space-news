<template>
      <div>
        <h1>Article #{{ id }}</h1>
      </div>
</template>
<script>
    export default {
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