<template>
  <div class="flex flex-row justify-between">
    <div>
      <span class="text-3xl text-white">Gallifrey Training</span>
    </div>
    <div class="flex flex-row gap-6 text-2xl items-center text-white">
      <button class="bg-green-400 font-bold py-2 px-8 rounded-full">
        Forum
      </button>
      <span>{{ username }}</span>
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
