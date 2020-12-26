<template>
  <div class="container mx-auto pt-10">
    <Navbar />
    <div
      class="min-h-full flex flex-col items-center justify-center w-full pt-20"
    >
      <input
        class="p-4 w-8/12 rounded-2xl"
        type="text"
        placeholder="Search by tags ..."
      />
      <div class="grid grid-cols-3 gap-5 pt-10 w-full">
        <div
          @click="show"
          style="background-image: url('./images/Free-Best-HD-Nature-Wallpapers.jpg')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          TỔNG HỢP
        </div>
        <div
          @click="show"
          style="background-image: url('./images/chemistry.jfif')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          HÓA HỌC
        </div>
        <div
          @click="show"
          style="background-image: url('./images/physics.jpg')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          VẬT LÍ
        </div>
        <div
          @click="show"
          style="background-image: url('./images/history.jpg')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          LỊCH SỬ
        </div>
        <div
          @click="show"
          style="background-image: url('./images/biology.jpg')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          SINH HỌC
        </div>
        <div
          @click="show"
          style="background-image: url('./images/geo.jpg')"
          class="font-bold text-2xl text-white  h-40 rounded-2xl bg-cover flex justify-center items-center cursor-pointer"
        >
          ĐỊA LÍ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
// import { quesCollection } from "../firebase"
export default {
  name: "Categories",
  components: { Navbar },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    show() {
      this.$router.push("/single");
    },
  },
};
</script>
