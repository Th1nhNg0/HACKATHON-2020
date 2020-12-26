<template>
  <div class="min-h-full pl-6 pr-6">
    <span class="font-bold text-xl pl-4">Chat</span>
    <ul
      class="messages pl-5 bg-white h-40 rounded-lg"
      v-chat-scroll="{ always: false, smooth: true }"
    >
      <li class="message" v-for="n in messages" :key="n">
        <strong>{{ n.author }}</strong
        >: {{ n.message }}
      </li>
    </ul>
    <div class="flex flex-row w-full pt-5">
      <input type="text" class="rounded-full w-full" v-model="message"/>
      <button class="bg-green-400 rounded-full px-2" @click="send">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      message: '',
      messages: [
        {
          message: "asdasd",
          author: "WR",
        },
      ],
    };
  },
  methods: {
    send() {

    }
  }
};
</script>
<style scoped>
/* .message li {
    background-color: transparent !important;
  } */
</style>
