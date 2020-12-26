<template>
  <div class="w-screen h-screen flex justify-center items-center bg-custom-bg">
    <div v-show="state" class="p-10 bg-gray-200 rounded-xl">
      <h1 class="text-4xl font-bold">Đăng nhập</h1>
      <form @submit="login" class="text-left flex flex-col gap-1">
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
          @click="state = false"
          class="w-full bg-blue-500 py-2  rounded-xl text-white font-bold text-xl"
        >
          Đăng ký
        </button>
      </form>
    </div>
    <div v-show="!state" class="p-10 bg-gray-200 rounded-xl">
      <h1 class="text-4xl font-bold">Đăng ký</h1>
      <form class="text-left flex flex-col gap-1">
        <p>Email:</p>
        <input class="rounded-xl px-5 py-2" type="email" v-model="remail" />
        <p>Mật khẩu:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="password"
          v-model="rpassword"
        />
        <p>Nhập lại mật khẩu:</p>
        <input
          class="rounded-xl px-5 py-2"
          type="password"
          v-model="rrepassword"
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
          class="w-full bg-blue-500 py-2  rounded-xl text-white font-bold text-xl"
        >
          Đăng Nhấp
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

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
    };
  },
  methods: {
    login() {},
  },
};
</script>
