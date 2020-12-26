<template>
  <div class="bg-gray-100 w-full rounded-2xl p-10 pt-5">
    <div
      v-if="!chosen"
      class="flex flex-row justify-between text-2xl font-bold pl-4 pr-4 pt-2"
    >
      <span>Câu hỏi</span>
    </div>
    <div class="my-5 " v-for="(question, index) in questions" :key="index">
      <div
        v-if="!chosen"
        class="bg-gray-300 py-3 rounded-full flex justify-between text-xl cursor-pointer shadow-md"
        @click="chooseQuestion(index)"
      >
        <span class="pl-6">{{ question.question }}</span>
      </div>
    </div>
    <QuestionAnswer
      v-if="chosen"
      @goBack="goBack"
      :question="questions[this.chosenid].question"
      :answers="questions[this.chosenid].answers"
      :correctAnswer="questions[this.chosenid].correctAnswer"
    />
    <div v-if="chosen" class="fakthis"></div>

    <Comment v-if="chosen" :id="questions[this.chosenid].id" color="#e2e8f0" />
  </div>
</template>

<script>
import QuestionAnswer from "./QuestionAnswer";
import Comment from "./Comment";
import { quesCollection } from "../firebase.js";
export default {
  name: "QuestionPanel",
  components: { QuestionAnswer, Comment },
  data() {
    return {
      chosen: false,
      chosenid: 0,
      questions: [],
      commentid: 0,
    };
  },
  mounted() {
    quesCollection.get().then((snap) => {
      snap.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        data.answers = [data.answerA, data.answerB, data.answerC, data.answerD];
        this.questions.push(data);
      });
    });
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
<style scoped>
.fakthis {
  border-top: 1px solid gray;
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
}
</style>
