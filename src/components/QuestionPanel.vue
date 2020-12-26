<template>
  <div class="bg-gray-400 w-full rounded-2xl pl-4 pr-4 pb-4">
    <div
      v-if="!chosen"
      class="flex flex-row justify-between text-xl font-bold pl-4 pr-4 pt-2"
    >
      <span>Câu hỏi</span>
      <span>Đáp án</span>
    </div>
    <div class="my-2" v-for="(question, index) in questions" :key="index">
      <div
        v-if="!chosen"
        class="bg-white py-2 rounded-full flex justify-between"
        @click="chooseQuestion(index)"
      >
        <span class="pl-6">{{ question.title }}</span>
        <span class="pr-10 font-bold text-xl">{{ question.answers }}</span>
      </div>
    </div>
    <QuestionAnswer
      v-if="chosen"
      @goBack="goBack"
      :question="questions[this.chosenid].title"
      :answers="questions[this.chosenid].ansArr"
    />
  </div>
</template>

<script>
import QuestionAnswer from "./QuestionAnswer";
export default {
  name: "QuestionPanel",
  components: { QuestionAnswer },
  data() {
    return {
      chosen: false,
      chosenid: 0,
      questions: [
        {
          title: "This is the title of the question",
          answers: 4,
          ansArr: ["hello", "hello", "hello", "hello"],
        },
        {
          title: "This is the title of the question",
          answers: 4,
          ansArr: ["hello", "hello", "hello", "hello"],
        },
        {
          title: "This is the title of the question",
          answers: 4,
          ansArr: ["hello", "hello", "hello", "hello"],
        },
        {
          title: "This is the title of the question",
          answers: 4,
          ansArr: ["hello", "hello", "hello", "hello"],
        },
      ],
    };
  },
  methods: {
    chooseQuestion(choice) {
      this.chosen = !this.chosen;
      this.chosenid = choice;
    },
    goBack() {
      this.chosen = false;
    },
  },
};
</script>
