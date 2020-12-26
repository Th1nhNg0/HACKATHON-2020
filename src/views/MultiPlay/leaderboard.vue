<template>
  <div
    class=" w-full h-full overflow-auto  text-white flex flex-col items-center gap-6"
  >
    <h1 class="font-bold text-4xl">Leaderboard</h1>
    <transition-group
      name="flip-list"
      tag="div"
      class="bg-purple-50 rounded-25px shadow p-6 w-full h-full overflow-auto flex flex-col gap-5"
    >
      <div
        v-for="p in players"
        :key="p.id"
        class="flex justify-between items-center gap-5 font-bold"
      >
        <p class=" text-4xl">{{ p.rank }}</p>
        <p class="text-xl">{{ p.username }}</p>
        <p class="flex-1 text-right text-2xl transition-all duration-150">
          {{ p.score }}
        </p>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "leaderboard",
  computed: {
    ...mapState(["room"]),
    players() {
      let p = [...this.room.players];
      p.sort((a, b) => b.score - a.score);
      p[0].rank = 1;
      for (let i = 1; i < p.length; i++)
        if (p[i].score == p[i - 1].score) p[i].rank = p[i - 1].rank;
        else p[i].rank = p[i - 1].rank + 1;
      return p;
    },
  },
  methods: {},
};
</script>

<style>
.flip-list-move {
  transition: transform 0.2s ease-in-out;
}
</style>
