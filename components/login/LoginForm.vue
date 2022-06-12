<template>
  <div id="login">
    <form novalidate @submit.prevent >
      <input v-model="user.username" placeholder="Username">
      <input v-model="user.password" placeholder="Password" type="password">
      <input :disabled="!isDisabled" class="button" type="submit" value="Login" autocomplete="off">
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { reactive, computed } from '@nuxtjs/composition-api';
import useRouter from 'vue-router'

declare module 'vue/types/vue' {
    interface Vue {
      user: any;
      isDisabled: () => boolean;
    }
  }

    export default Vue.extend({
        name: "LoginPage",
        setup() {
            const user = reactive({
                username: '',
                password: '',
            })

        const router = new useRouter({
        routes: [
            {
                path: "/articles",
                name: "articles",
                component: () => import('../../pages/articles/articlePage.vue')
            },
        ]
        })


            const isDisabled = computed(() => {
                let disabled = false;
                if(user.username !== "" && user.password !== "") {
                    // this.$router.push({ path: "articles" });
                    router.push({ name: 'articles' })
                    disabled = true;
                } 
                return disabled;
             });

            return {
                user,
                isDisabled,
            }
        }
    });
</script>
<style scoped>
    #login {
        max-width: 500px;
        border: 1px solid #CCCCCC;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #f4f4f4;
    }

    .button {
        display: inline-block;
        outline: 0;
        border: none;
        cursor: pointer;
        padding: 0 24px;
        border-radius: 50px;
        min-width: 200px;
        height: 50px;
        font-size: 18px;
        background-color: #fd0;
        font-weight: 500;
        color: #222;
    }

    .button:focus {
        border: 3px solid #5551ff;
    }

    .button:disabled {
        background-color: #CCCCCC;
        cursor: default;
    }

    input {
        border: 3px solid #000;
        border-radius: 5px;
        height: 50px;
        line-height: normal;
        color: #282828;
        display: block;
        width: 100%;
        box-sizing: border-box;
        user-select: auto;
        font-size: 16px;
        padding: 0 6px;
        padding-left: 12px;
        margin: 12px 0;
    }

    input:focus {
        border: 3px solid #5551ff;
    }
</style>
