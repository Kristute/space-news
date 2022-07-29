<template>
  <div id="login">
    <form novalidate @submit.prevent="onSubmit" >
      <input v-model="user.username" placeholder="Username">
      <input v-model="user.password" placeholder="Password" type="password">
      <input :disabled="!isDisabled" class="button" type="submit" value="Login" autocomplete="off">
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import useRouter from 'vue-router';
import NotFoundComponent from './NotFoundComponent.vue';

declare module 'vue/types/vue' {
    interface Vue {
        user: {
            username: string;
            password: string;
        };
        isDisabled: () => boolean;
    }
}

export default defineComponent({
    name: "LoginPage",
    setup() {
        const user = reactive({
            username: '',
            password: '',
        })

        // eslint-disable-next-line new-cap
        const router = new useRouter({
        mode: 'history',
        routes: [
            {
                path: "/articles",
                name: "articles",
                component: () => import('../pages/articles/index.vue')
            },
            { path: '*', component: NotFoundComponent }
        ]
        })

        const isDisabled = computed(() => {
            let disabled = false;
            if(user.username !== "" && user.password !== "") {
                disabled = true;
            } 
            return disabled;
        });

        const onSubmit = () => {
            const path = 'articles';
            window.location.href = path;
            router.push({ name: path });
        };

        return {
            user,
            isDisabled,
            onSubmit,
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

    input {
        background: white;
    }

    input:focus {
        border: 3px solid #5551ff;
    }
</style>
