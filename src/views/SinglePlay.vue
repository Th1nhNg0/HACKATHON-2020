<template>
  <div class="w-screen min-h-screen container mx-auto py-10">
    <!-- nav -->
    <div class="flex justify-between">
      <button
        @click="back"
        class="py-4 px-5 bg-red-500 rounded-full flex justify-center items-center"
      >
        <i class="fas fa-chevron-left fa-2x text-white"></i>
      </button>
      <h1 class="font-bold text-5xl text-white">Luyện tập</h1>
      <div class="flex gap-5">
        <div
          class="py-4 px-5 bg-yellow-500 text-white font-bold rounded-full text-xl flex justify-center items-center"
        >
          Time: {{ timeF }}
        </div>
      </div>
    </div>
    <div class="w-full mt-10 text-3xl text-center">
      <div class="bg-gray-400 rounded-2xl p-10 ">
        {{ question.question }}
      </div>
      <div class="grid grid-cols-2 w-full gap-5 mt-5">
        <div
          @click="answer('A')"
          class=" rounded-2xl p-10 hover:bg-gray-500 cursor-pointer	transition-all ease-in-out duration-300"
          :style="{ background: colors[0] }"
        >
          {{ question.answerA }}
        </div>
        <div
          @click="answer('B')"
          class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
          :style="{ background: colors[1] }"
        >
          {{ question.answerB }}
        </div>
        <div
          @click="answer('C')"
          class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
          :style="{ background: colors[2] }"
        >
          {{ question.answerC }}
        </div>
        <div
          @click="answer('D')"
          class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
          :style="{ background: colors[3] }"
        >
          {{ question.answerD }}
        </div>
      </div>
      <div
        v-show="ifAnswer"
        @click="next"
        class="p-5 bg-green-500 mt-5 cursor-pointer rounded-xl text-white font-bold"
      >
        Next
      </div>
    </div>
    <div v-if="ifAnswer" class="mt-10 ">
      <h1 class="text-white font-bold text-4xl">Lời giải:</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { quesCollection } from "../firebase";
export default {
  name: "SinglePlay",
  data() {
    return {
      questions: [],
      index: 0,
      time: 0,
      ifAnswer: false,
      colors: ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"],
    };
  },
  async mounted() {
    setInterval(() => this.time++, 1000);
    const snapshot = await quesCollection.get();
    snapshot.forEach((doc) => {
      this.questions.push(doc.data());
    });
  },
  computed: {
    question() {
      if (this.questions.length > 0) return this.questions[this.index];
      return {};
    },
    timeF() {
      let time = this.time;
      let minutes = Math.floor(time / 60);
      time = time % 60;
      let seconds = time;
      let s = "";
      if (minutes > 0) s = minutes + " phút ";
      s += seconds + " giây";
      return s;
    },
  },
  methods: {
    next() {
      this.index++;
      if (this.index == this.questions.length) this.index = 0;
      this.ifAnswer = false;
      this.colors = ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"];
    },
    answer(answer) {
      if (this.ifAnswer) return;
      this.ifAnswer = true;
      console.log({ A: 0, B: 1, C: 2, D: 3 }[answer]);
      this.colors[{ A: 0, B: 1, C: 2, D: 3 }[answer]] = "#ef4444";
      this.colors[{ A: 0, B: 1, C: 2, D: 3 }[this.question.correctAnswer]] =
        "#10b981";
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
