<template>
  <div class="container mx-auto pt-10">
    <Navbar />
    <div class="w-full text-center">
      <span class="font-bold text-3xl text-white">Thư viện câu hỏi</span>
    </div>
    <QuestionPanel />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import QuestionPanel from "../components/QuestionPanel";
export default {
  name: "Forum",
  components: { Navbar, QuestionPanel },
};
</script>
