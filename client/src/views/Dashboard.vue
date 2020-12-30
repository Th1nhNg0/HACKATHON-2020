<template>
  <div class="container mx-auto pt-10 bg-custom-bg">
    <Navbar />
    <div>
      <span class="font-bold text-3xl text-white">Luyện tập:</span>
    </div>
    <div class="flex pt-5 gap-6">
      <router-link to="/singleChoose">
        <div
          class="h-40 w-40 shadow-md bg-gray-500 flex items-center justify-center rounded-2xl"
        >
          <i class="fad fa-plus text-6xl"></i>
        </div>
      </router-link>

      <div class="flex flex-row justify-between gap-6 ">
        <div v-for="i in 4" :key="i">
          <router-link to="/single">
            <div
              :style="{ backgroundImage: `url(./images/${images[i]})` }"
              class="shadow-md h-40 w-64 bg-cover rounded-2xl flex justify-center items-center hover:scale-105 transition-all duration-200 ease-in-out transform"
            >
              <span
                class="font-bold text-xl bg-white bg-opacity-50	 w-full text-center"
              >
                Gói câu hỏi {{ i }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full  pt-10 flex flex-row justify-between gap-4">
      <div class="w-7/12 bg-gray-100 rounded-2xl shadow-md">
        <Room />
      </div>
      <div
        style="height:19rem"
        class="w-5/12  bg-gray-100 rounded-2xl shadow-md"
      >
        <Chat />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import Room from "../components/Room";
export default {
  name: "Dashboard",
  data() {
    return {
      images: [
        "",
        "maxresdefault.jpg",
        "10_exam_preparation_tips.webp",
        "colorful-flat-chemistry-background_23-2148160522.jpg",
        "Free-Best-HD-Nature-Wallpapers.jpg",
      ],
    };
  },
  components: { Navbar, Chat, Room },
};
</script>
