<template>
  <v-container grid-list-md>
        <v-row>
          <v-col cols="12" sm="4" lg="3" v-for="article in articles" :key="article.id">
            <nuxt-link :to="`/articles/${ article.id }`">
              <v-card
                class="mx-auto"
                outlined
                hover
                height="350"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-img
                      :src="`${ article.imageUrl }`"
                      height="150px"
                      :alt="`${ article.title }`"
                    >
                    </v-img>
                    <div class="text-overline mb-4">
                        {{ article.title }}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                      Published: {{ article.publishedAt }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Updated: {{ article.updatedAt }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    outlined
                    rounded
                    text
                  >
                    Read more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
  </v-container>         
</template>
<script>

export default defineComponent({
  props: {
    articles: {
      type: Array,
      default: null
    } 
  }
})
</script>
<style lang="scss" scoped>

</style>
