<template>
  <div class="flex flex-row justify-between pb-10">
    <router-link to="/">
      <span class="text-4xl font-bold text-white"
        ><span style="color:#fbc124">Athena</span>Edu</span
      >
      <p class="text-white text-xl leading-3">Flying your learning</p>
    </router-link>
    <div class="flex flex-row gap-6 text-2xl items-center text-white">
      <span>Hi, {{ username }}</span>
      <router-link
        class="bg-green-400 font-bold py-2 px-8 rounded-full"
        to="questions"
        >Forum</router-link
      >
      <button
        @click="signout"
        class="bg-red-400 font-bold py-2 px-8 rounded-full"
      >
        Signout
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: mapState(["username"]),
  methods: {
    signout() {
      auth.signOut().then(() => location.reload());
    },
  },
};
</script>
