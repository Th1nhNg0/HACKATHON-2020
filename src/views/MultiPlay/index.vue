<template>
  <div class="w-screen min-h-screen container mx-auto py-10">
    <!-- nav -->
    <div class="flex justify-between">
      <button
        @click="exitRoom"
        v-show="room.canJoin"
        class="py-4 px-5 bg-red-500 rounded-full flex justify-center items-center"
      >
        <i class="fas fa-chevron-left fa-2x text-white"></i>
      </button>
      <div class="flex gap-5">
        <div
          class="py-4 px-5 bg-blue-500 text-white font-bold rounded-full text-xl flex justify-center items-center"
        >
          {{ room.players.length }} <i class="fas fa-user ml-3"></i>
        </div>
      </div>
    </div>
    <div class="w-full h-full">
      <PlayerList v-show="room.canJoin" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerList from "./PlayerList";
export default {
  name: "SinglePlay",
  components: {
    PlayerList,
  },
  data() {
    return {
      question: {},
      colors: ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"],
    };
  },
  mounted() {
    if (this.room == false) this.$router.push("/");
  },
  computed: {
    room() {
      return this.$store.state.room;
    },
  },
  methods: {
    next() {
      this.colors = ["#e2e8f0", "#e2e8f0", "#e2e8f0", "#e2e8f0"];
    },
    answer(answer) {
      if (this.ifAnswer) return;
      this.ifAnswer = true;
      console.log({ A: 0, B: 1, C: 2, D: 3 }[answer]);
      this.colors[{ A: 0, B: 1, C: 2, D: 3 }[answer]] = "#ef4444";
      this.colors[{ A: 0, B: 1, C: 2, D: 3 }[this.question.correctAnswer]] =
        "#10b981";
    },

    exitRoom() {
      this.$socket.emit("leaveRoom");
      setTimeout(() => {
        this.$store.dispatch("exitRoom");
        this.$router.back();
      }, 500);
    },
  },
};
</script>
