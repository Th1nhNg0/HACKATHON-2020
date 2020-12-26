<template>
  <div class="container mx-auto pt-5">
    <Navbar />
    <div class="w-full text-center mb-10">
      <span class="font-bold text-4xl text-white">Diễn đàn</span>
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
