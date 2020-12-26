<template>
  <div class="flex flex-row justify-between pb-10">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-white ">
        <span style="color:#fbc124">Athena</span>Edu
      </h1>
      <p class="text-white text-xl leading-3 text-center">
        Flying your learning
      </p>
    </router-link>
    <div class="flex flex-row gap-6 text-2xl items-center text-white">
      <span>Hi, {{ username }}</span>
      <router-link
        class="bg-green-400 font-bold py-2 px-8 rounded-full shadow-md"
        to="questions"
        >Forum</router-link
      >
      <router-link
        class="bg-yellow-600 font-bold py-2 px-8 rounded-full shadow-md"
        to="rank"
        >Rank</router-link
      >
      <button
        @click="signout"
        class="bg-red-400 font-bold py-2 px-8 rounded-full shadow-md"
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
