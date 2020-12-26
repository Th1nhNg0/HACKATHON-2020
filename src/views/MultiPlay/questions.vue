<template>
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
