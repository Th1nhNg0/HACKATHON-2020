<template>
  <div class="container mx-auto pt-10 bg-custom-bg">
    <Navbar />
    <div>
      <span class="font-bold text-3xl text-white">Luyện tập:</span>
    </div>
    <div class="flex pt-10 gap-6">
      <router-link to="/single">
        <div
          class="h-40 w-40 bg-gray-500 flex items-center justify-center rounded-lg"
        >
          <i class="fad fa-plus text-6xl"></i>
        </div>
      </router-link>

      <div class="flex flex-row justify-between gap-6">
        <div v-for="i in 3" :key="i">
          <router-link to="/single">
            <div
              style="background-image: url('./images/practice-bg.png')"
              class="h-40 w-64 bg-cover rounded-3xl"
            >
              <span class="font-bold text-xl pl-10 text-white">
                Luyện thi đại học
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full pt-20 flex flex-row justify-between gap-4">
      <div class="w-7/12 bg-gray-400 rounded-lg">
        <span class="font-bold text-xl pl-2">Rooms</span>
      </div>
      <div class="w-5/12 h-64 bg-gray-400 rounded-lg">
        <Chat />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
export default {
  name: "Dashboard",
  components: { Navbar, Chat },
};
</script>
