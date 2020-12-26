<template>
  <div class="container mx-auto pt-10 bg-custom-bg">
    <div class="flex flex-row justify-between">
      <div>
        <span class="text-3xl text-white">Gallifrey Training</span>
      </div>
      <div class="flex flex-row gap-6 text-2xl items-center text-white">
        <button class="bg-green-400 font-bold py-2 px-8 rounded-full">
          Forum
        </button>
        <span>Username</span>
        <button class="bg-red-400 font-bold py-2 px-8 rounded-full">
          Signout
        </button>
      </div>
    </div>
    <div>
      <span class="font-bold text-3xl text-white">Luyện tập:</span>
    </div>
    <div class="flex pt-10">
      <div
        class="h-40 w-40 bg-gray-500 flex items-center justify-center rounded-lg"
      >
        <i class="fad fa-plus text-6xl"></i>
      </div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div
            style="background-image: url('./images/practice-bg.png')"
            class="h-40 bg-cover"
          >
            <span class="font-bold text-xl pl-10 text-white">
              Luyện thi đại học
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            style="background-image: url('./images/practice-bg.png')"
            class="h-40 bg-cover"
          >
            <span class="font-bold text-xl pl-10 text-white">
              Luyện thi đại học
            </span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            style="background-image: url('./images/practice-bg.png')"
            class="h-40 bg-cover"
          >
            <span class="font-bold text-xl pl-10 text-white">
              Luyện thi đại học
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full">
      <div class="w-8/12">
        <span class="font-bold text-xl">Rooms</span>
      </div>
      <div class="w-4/12"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Dashboard",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>
