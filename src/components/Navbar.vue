<template>
  <div class="flex flex-row justify-between">
    <router-link to="/">
      <span class="text-3xl text-white">AthenaEdu</span>
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
