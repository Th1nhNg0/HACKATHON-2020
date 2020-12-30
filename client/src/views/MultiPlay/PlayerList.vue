<template>
  <div class="w-full h-full">
    <h1 class="font-bold text-white text-5xl text-center">Player List:</h1>
    <transition-group
      name="list-complete"
      tag="div"
      class="	 grid grid-cols-4 text-center text-white font-bold text-3xl pt-10 "
    >
      <div
        v-for="p in room.players.slice().reverse()"
        class="transition-all duration-500 ease-in-out"
        :key="p.id"
        :style="{ color: p.ready ? '#35BC52' : 'white' }"
      >
        {{ p.username }}
      </div>
    </transition-group>
    <button
      @click="ready"
      class=" px-6 py-4 bg-green-400 rounded-2xl text-white font-bold text-3xl absolute"
      style="right:50%;bottom:2rem;transform:translateX(50%)"
    >
      Ready
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    room() {
      return this.$store.state.room;
    },
  },
  methods: {
    ready() {
      this.$socket.emit("playerReady");
    },
  },
};
</script>
<style>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
