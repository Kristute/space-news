<template>
  <div id="login">
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password" type="password">
      <input :disabled="!isDisabled" class="button" type="submit" value="Login">
    </form>
  </div>
</template>
<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
            };
        },
        computed: {
            isDisabled() {
                let isDisabled = false;
                if (this.username.length > 0 || this.password.length > 0) {
                    isDisabled = true;
                }
                return isDisabled;
            }
        },
        methods: {
            login() {
                if(this.username !== "" || this.password !== "") {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "articles" });
                } else {
                    console.log("A username and password must be present");
                }
            }
        },
    };
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