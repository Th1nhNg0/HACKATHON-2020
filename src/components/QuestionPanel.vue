<template>
  <div class="bg-gray-400 h-64 w-full rounded-xl pl-4 pr-4">
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
    <div
      v-if="chosen"
      class="flex flex-row justify-between font-bold text-xl pl-4 pr-4 pt-2 pb-5 text-white"
    >
      <button @click="goBack" class="bg-green-400 px-4 py-2 rounded-full">
        Back
      </button>
      <button class="bg-green-400 px-2 py-2 rounded-full">
        Đóng góp đáp án
      </button>
    </div>
    <div v-if="chosen" class="bg-white rounded-full py-2">
      <span class="pl-6 text-2xl"
        ><strong>Câu hỏi: </strong>{{ questions[this.chosenid].title }}</span
      >
    </div>
    <div v-if="chosen" class="py-2">
      <span class="font-bold text-2xl pl-2">Đáp án</span>
    </div>
    <div
      class="my-2"
      v-for="(answer, index) in questions[this.chosenid].ansArr"
      :key="index"
    >
      <div v-if="chosen" class="bg-white rounded-full py-2">
        <span class="pl-6 py-4 text-2xl"
          ><strong>Câu trả lời: </strong>{{ answer }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionPanel",
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
