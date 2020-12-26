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
      <div class="grid grid-cols-3 grid-rows-3 gap-5 pt-10">
        <button style="background-image: url('./images/cac.png')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl">TOÁN HỌC</button>
        <button style="background-image: url('./images/chemistry.jfif')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl bg-center">HÓA HỌC</button>
        <button style="background-image: url('./images/physics.jpg')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl">VẬT LÍ</button>
        <button style="background-image: url('./images/history.jpg')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl">LỊCH SỬ</button>
        <button style="background-image: url('./images/biology.jpg')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl bg-center">SINH HỌC</button>
        <button style="background-image: url('./images/geo.jpg')" class="font-bold text-2xl text-white py-5 px-10 rounded-3xl">ĐỊA LÍ</button>
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
