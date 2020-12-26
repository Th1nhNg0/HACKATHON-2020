<template>
  <div class="min-h-full pl-6 pr-6">
    <span class="font-bold text-xl pl-4">Chat</span>
    <ul
      class="messages pl-5 bg-white h-40 rounded-lg overflow-scroll overscroll-y-auto"
      v-chat-scroll="{ always: false, smooth: true }"
    >
      <li class="message" v-for="(n, index) in messages" :key="index">
        <strong>{{ n.user }}</strong
        >: {{ n.message }}
      </li>
    </ul>
    <div class="flex flex-row w-full pt-5">
      <input
        @keyup.enter="send"
        type="text"
        class="rounded-full w-full"
        v-model="message"
      />
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
      messages: [],
    };
  },
  mounted() {
    messagesCollection.get().then((q) => {
      q.forEach((d) => {
        this.messages.unshift(d.data());
      });
    });
    messagesCollection.onSnapshot((query) => {
      query.docChanges().forEach((f) => {
        if(f.type === "added") {
          console.log(f)
        }
      });
      // query.orderBy("sentAt", "asc");
      this.messages = [];
      query.forEach((q) => {
        this.messages.unshift(q.data());
      });
      this.messages.sort((a, b) => a.sendAt - b.sendAt);
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
.messages::-webkit-scrollbar {
  display: none;
}
.messages {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
