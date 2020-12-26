<template>
  <div class="container mx-auto pt-10">
    <Navbar />
    <div
      class="min-h-full flex flex-col items-center justify-center w-full pt-20"
    >
      <input
        class="p-4 w-8/12 rounded-2xl"
        type="text"
        placeholder="Search by tags ..."
      />
      <div class="grid grid-cols-3 grid-rows-2 gap-5 pt-10">
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
        <button
          @click="show"
          class="bg-white inline-block px-8 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition duration-500 bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
        >
          Primary
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
// import { quesCollection } from "../firebase"
export default {
  name: "Categories",
  components: { Navbar },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    show() {
      this.$router.push("/single");
    },
  },
};
</script>
