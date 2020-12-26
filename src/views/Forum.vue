<template>
  <div class="container mx-auto pt-5">
    <Navbar />
    <div class="w-full text-center mb-10">
      <h1 class="font-bold text-4xl text-white">Diễn đàn</h1>
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
