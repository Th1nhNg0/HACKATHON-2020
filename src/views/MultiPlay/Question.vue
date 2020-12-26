<template>
  <div class="w-full mt-10 text-3xl text-center">
    <div class="bg-gray-400 rounded-2xl p-10" v-html="question.question"></div>
    <div class="grid grid-cols-2 w-full gap-5 mt-5">
      <div
        @click="answer(0)"
        class=" rounded-2xl p-10 hover:bg-gray-500 cursor-pointer	transition-all ease-in-out duration-300"
        :style="{ background: colors[0] }"
      >
        {{ question.answerA }}
      </div>
      <div
        @click="answer(1)"
        class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
        :style="{ background: colors[1] }"
      >
        {{ question.answerB }}
      </div>
      <div
        @click="answer(2)"
        class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
        :style="{ background: colors[2] }"
      >
        {{ question.answerC }}
      </div>
      <div
        @click="answer(3)"
        class="rounded-2xl p-10  hover:bg-gray-500 cursor-pointer		transition-all ease-in-out duration-300"
        :style="{ background: colors[3] }"
      >
        {{ question.answerD }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      choose: -1,
    };
  },
  computed: {
    colors() {
      let c = ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"];
      c[this.choose] = "#AEAEAE";
      if (typeof this.trueAnswer == "number") {
        c[this.choose] = "#EC4F4F";
        c[this.trueAnswer] = "#8FD789";
      }
      return c;
    },
    room() {
      return this.$store.state.room;
    },
    question() {
      let q = this.room.question;

      return {
        question: q.question,
        answerA: q.incorrect_answers[0],
        answerB: q.incorrect_answers[1],
        answerC: q.incorrect_answers[2],
        answerD: q.incorrect_answers[3],
        id: q.id,
      };
    },
    trueAnswer() {
      return this.room.trueAnswer;
    },
  },
  methods: {
    answer(choose) {
      if (this.choose > -1) return;
      this.choose = choose;
      this.$socket.emit("playerAnswer", {
        questionID: this.question.id,
        choose,
      });
    },
  },
};
</script>

<style></style>
