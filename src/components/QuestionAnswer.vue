<template>
  <div>
    <div
      class="flex flex-row justify-between font-bold text-xl pl-4 pr-4 pt-2 pb-5 text-white"
    >
      <button @click="goBack" class="bg-green-400 px-4 py-2 rounded-full">
        Back
      </button>
      <button class="bg-green-400 px-2 py-2 rounded-full">
        Đóng góp đáp án
      </button>
    </div>
    <div class="bg-white rounded-full py-2">
      <span class="pl-6 text-2xl"
        ><strong>Câu hỏi: </strong>{{ question }}</span
      >
    </div>
    <!-- <div class="py-2">
      <span class="font-bold text-2xl pl-2">Đáp án</span>
    </div> -->
    <div class="bg-white rounded-full py-2">
        <span class="pl-6 py-4 text-2xl"
          ><strong>Câu trả lời: </strong>{{ answer }}</span
        >
      </div>
    <!-- <div class="my-2" v-for="(answer, index) in answers" :key="index">
      <div class="bg-white rounded-full py-2">
        <span class="pl-6 py-4 text-2xl"
          ><strong>Câu trả lời: </strong>{{ answer }}</span
        >
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["question", "answers"],
  name: "QuestionAnswer",
  methods: {
    goBack() {
      this.$emit("goBack");
    },
  },
};
</script>
