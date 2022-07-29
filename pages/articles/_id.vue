<template>
  <Wrapper>
      <div>
        <h1>Article #{{ id }}</h1>
        <div>{{ article.title }}</div>
      </div>
      <v-layout row wrap align-center>
          <v-flex xs8  offset-md2>
              <v-card v-if="article" class="my-3" hover>
                <v-img
                  height="350px"
                  :src="article.imageUrl"
                ></v-img>
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ article.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ article.summary }}
                </v-card-text>
                <v-card-actions>
                  <v-chip small color="secondary" class="white--text">
                    {{article.newsSite}}
                  </v-chip>
                  <v-spacer></v-spacer>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon small>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-google-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-linkedin</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn small replace color="info" :href="article.url" target="_blank" >
                    <a :href="`${article.url }`" target="_blank">Read full article </a>
                  </v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
        <!-- maybe add section with other articles above -->
        </v-layout>
   </Wrapper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { Ref } from 'vue';
import type Article from '../../types/Article';
import Wrapper from '~/components/WrapperComponent.vue';

export default defineComponent ({
  components: {
    Wrapper,
  },
  setup() {
    const { pending, data: article } = useLazyFetch('https://api.spaceflightnewsapi.net/v3/articles/' + '15935');
    console.log(article);
    const article1: Ref<Article | undefined>  = ref();

    return {
      pending,
      article,
      article1
    }
  },
  async fetch() {
    this.article = await fetch('https://api.spaceflightnewsapi.net/v3/articles/' + this.id)
    .then(res =>
      res.json()
    )
  },

  // head() {
  //   return {
  //     title: 'Article #' + this.id,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'What you need to know about Article #' + this.id
  //       }
  //     ]
  //   }
  // },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
})
</script>