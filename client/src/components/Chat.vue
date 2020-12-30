<template>
  <div class="h-full p-5 pt-2">
    <span class="font-bold text-3xl">Chat</span>
    <div class="flex flex-col h-full pb-10">
      <ul
        class="messages p-5 pb-2 bg-white shadow-md rounded-2xl overflow-scroll overscroll-y-auto"
        v-chat-scroll="{ always: false, smooth: false }"
      >
        <li class="message" v-for="(n, index) in messages" :key="index">
          <strong>{{ n.user }}</strong
          >: {{ n.message }}
        </li>
      </ul>
      <div class="flex flex-row w-full mt-3">
        <input
          @keyup.enter="send"
          type="text"
          placeholder="Nhập tin nhắn ..."
          class="rounded-full w-full p-2 shadow-md"
          v-model="message"
        />
        <button
          class="bg-green-400 rounded-full px-4 text-white font-bold -ml-10 shadow-md "
          @click="send"
        >
          Gửi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { messagesCollection } from "../firebase";
export default {
  name: "Chat",
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  mounted() {
    messagesCollection.onSnapshot((query) => {
      this.messages = [];
      query.forEach((q) => {
        this.messages.unshift(q.data());
      });
      this.messages = this.messages.sort((a, b) => a.sendAt - b.sendAt);
    });
  },
  methods: {
    send() {
      if (this.message === "") return;
      messagesCollection.add({
        message: this.message,
        user: this.$store.state.username,
        sendAt: Date.now(),
      });
      this.message = "";
    },
  },
};
</script>
<style scoped>
.messages::-webkit-scrollbar {
  display: none;
}
.messages {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
