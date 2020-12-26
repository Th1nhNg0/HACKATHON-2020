<template>
  <div class="container mx-auto pt-10 bg-custom-bg">
    <div class="flex flex-row justify-between">
      <div>
        <span class="text-3xl text-white">Gallifrey Training</span>
      </div>
      <div class="flex flex-row gap-10 text-2xl items-center text-white">
        <button class="bg-green-400 font-bold py-2 px-8 rounded-full">
          Forum
        </button>
        <span>Username</span>
      </div>
    </div>
    <div>
      <span class="font-bold text-3xl text-white">Luyện tập:</span>
    </div>
    <div class="flex flex-row gap-10 pt-10">
      <div
        class="h-40 w-40 bg-gray-500 flex items-center justify-center rounded-lg"
      >
        <i class="fad fa-plus text-6xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dshboard",
};
</script>
