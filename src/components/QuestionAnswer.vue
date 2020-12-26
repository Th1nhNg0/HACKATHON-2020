<template>
  <div>
    <div
      class="flex flex-row justify-between font-bold text-xl pl-4 pr-4 pt-2 pb-5 text-white"
    >
      <button @click="goBack" class="bg-green-500  px-4 py-2 rounded-2xl">
        Back
      </button>
    </div>
    <div class="bg-gray-300 rounded-full py-4 ">
      <span class="pl-6 text-2xl"
        ><strong>Câu hỏi: </strong>{{ question }}</span
      >
    </div>
    <div class=" grid grid-cols-2 gap-5 mt-5">
      <div v-for="(answer, index) in answers" :key="index">
        <div
          class="bg-gray-300 rounded-full text-center  p-4"
          :style="{ backgroundColor: colors[index] }"
        >
          <span>{{ answer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "answers", "correctAnswer"],
  name: "QuestionAnswer",
  methods: {
    goBack() {
      this.$emit("goBack");
    },
  },
  computed: {
    colors() {
      let colors = ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"];
      colors[{ A: 0, B: 1, C: 2, D: 3 }[this.correctAnswer]] = "#48bb78";
      console.log(this.correctAnswer);
      return colors;
    },
  },
};
</script>
