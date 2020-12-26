<template>
  <div class="min-h-full pl-6 pr-6">
    <span class="font-bold text-xl pl-4">Chat</span>
    <ul
      class="messages pl-5 bg-white h-40 rounded-lg"
      v-chat-scroll="{ always: false, smooth: true }"
    >
      <li class="message" v-for="n in messages" :key="n">
        <strong>{{ n.user }}</strong
        >: {{ n.message }}
      </li>
    </ul>
    <div class="flex flex-row w-full pt-5">
      <input type="text" class="rounded-full w-full" v-model="message" />
      <button class="bg-green-400 rounded-full px-2" @click="send">Send</button>
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
      messages: [
        {
          message: "asdasd",
          user: "WR",
        },
      ],
    };
  },
  mounted() {
    messagesCollection.onSnapshot((query) => {
      this.messages = [];
      query.forEach((q) => {
        console.log(q.data());
        this.messages.push(q.data());
      });
    });
  },
  methods: {
    send() {
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
/* .message li {
    background-color: transparent !important;
  } */
</style>
