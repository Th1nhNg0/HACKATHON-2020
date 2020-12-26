<template>
  <div class="text-center p-5 ">
    <div class="flex justify-between px-5">
      <span class="font-bold text-3xl ">Room List</span>
      <button
        @click="createRoom"
        class="bg-green-500 px-4 py-2 rounded-2xl text-white font-bold shadow-md"
      >
        Create Room
      </button>
    </div>
    <div class="w-full   overflow-hidden rounded-2xl text-left">
      <div class="overflow-auto h-full w-full">
        <div
          class="grid grid-cols-12  font-bold px-5 py-3"
          style="min-width: 400px"
        >
          <div class="col-span-7">Room Name</div>
          <div class="col-span-3">Status</div>
          <div class="col-span-2">Players</div>
        </div>
        <!-- content -->
        <div class="flex flex-col gap-5">
          <div
            class="grid grid-cols-12 text-sm  bg-gray-200 px-5 py-3 rounded-2xl shadow-md cursor-pointer hover:bg "
            style="min-width: 400px"
            v-for="r in rooms"
            :key="r.id"
            @click="joinRoom(r.id)"
          >
            <div class="col-span-7">
              {{ r.name }}
            </div>
            <div class="col-span-3">{{ r.canJoin ? "OPEN" : "LOCK" }}</div>
            <div class="col-span-2">{{ r.playersCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {};
  },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    },
  },
  methods: {
    createRoom() {
      this.$socket.emit("setUsername", this.$store.state.username);
      this.$socket.emit("createRoom", "test");
      setTimeout(() => this.$router.push("/multiplay"), 500);
    },
    joinRoom(id) {
      this.$socket.emit("setUsername", this.$store.state.username);
      this.$socket.emit("joinRoom", id);
      setTimeout(() => this.$router.push("/multiplay"), 500);
    },
  },
};
</script>
<style scoped>
/* .message li {
    background-color: transparent !important;
  } */
</style>
