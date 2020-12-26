<template>
  <div class="w-screen h-screen container mx-auto py-10">
    <!-- nav -->
    <div class="flex justify-between">
      <button
        @click="back"
        class="py-4 px-5 bg-red-500 rounded-full flex justify-center items-center"
      >
        <i class="fas fa-chevron-left fa-2x text-white"></i>
      </button>
      <h1 class="font-bold text-4xl text-white">Luyện tập</h1>
      <div
        class="py-4 px-5 bg-blue-500 text-white font-bold rounded-full text-xl flex justify-center items-center"
      >
        Câu hỏi {{ questionCount }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "SinglePlay",
  data() {
    return { questionCount: 1 };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
