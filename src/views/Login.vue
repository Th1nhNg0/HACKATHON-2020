<template>
  <div
    class="w-screen h-screen flex flex-col gap-5 justify-center items-center"
  >
    <div class="my-10">
      <h1 class="text-6xl font-bold text-white text-center">
        <span style="color:#fbc124">Athena</span>Edu
      </h1>
      <p class="text-white text-3xl leading-3 text-center">
        Flying your learning
      </p>
    </div>
    <div
      v-show="errorMessage != ''"
      class="p-10 bg-red-200 font-bold  rounded-xl"
    >
      <p>{{ errorMessage }}</p>
    </div>
    <div v-show="state" class="p-10 bg-gray-200 rounded-xl">
      <h1 class="text-4xl font-bold">Đăng nhập</h1>
      <form @submit.prevent="login" class="text-left flex flex-col gap-1">
        <p>Email:</p>
        <input class="rounded-xl px-5 py-2" type="email" v-model="email" />
        <p>Mật khẩu:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="password"
          v-model="password"
        />
        <button
          type="submit"
          class="w-full bg-green-500 py-2 mt-2 rounded-xl text-white font-bold text-xl"
        >
          Đăng nhập
        </button>
        <p class="mt-5">Chưa có tài khoản?</p>
        <button
          type="button"
          @click="state = false"
          class="w-full bg-blue-500 py-2  rounded-xl text-white font-bold text-xl"
        >
          Đăng ký
        </button>
      </form>
    </div>
    <div v-show="!state" class="p-10 bg-gray-200 rounded-xl">
      <h1 class="text-4xl font-bold">Đăng ký</h1>
      <form @submit.prevent="register" class="text-left flex flex-col gap-1">
        <p>Email:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="email"
          v-model="remail"
          required
        />
        <p>Username:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="text"
          v-model="rusername"
          required
        />
        <p>Mật khẩu:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="password"
          v-model="rpassword"
          required
        />
        <p>Nhập lại mật khẩu:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="password"
          v-model="rrepassword"
          required
        />
        <button
          type="submit"
          class="w-full bg-green-500 py-2 mt-2 rounded-xl text-white font-bold text-xl"
        >
          Đăng ký
        </button>
        <p class="mt-5">Đã có tài khoản?</p>
        <button
          @click="state = true"
          type="button"
          class="w-full bg-blue-500 py-2  rounded-xl text-white font-bold text-xl"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { auth } from "../firebase";
export default {
  name: "Login",
  data() {
    return {
      state: true,
      email: "",
      password: "",
      rpassword: "",
      remail: "",
      rrepassword: "",
      errorMessage: "",
      rusername: "",
    };
  },
  methods: {
    async login() {
      try {
        let { user } = await auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$store.dispatch("fetchUserProfile", user);
      } catch (e) {
        this.errorMessage = "Sai tài khoản hoặc mật khẩu";
      }
    },
    async register() {
      if (this.rrepassword != this.rpassword) {
        this.errorMessage = "Mật khẩu không khớp";
      }
      try {
        let { user } = await auth.createUserWithEmailAndPassword(
          this.remail,
          this.rpassword
        );
        user.updateProfile({
          displayName: this.rusername,
        });
        this.$store.dispatch("fetchUserProfile", user);
        this.$store.commit("setUserProfile", this.rusername);
      } catch (e) {
        this.errorMessage = e.message;
      }
    },
  },
};
</script>
