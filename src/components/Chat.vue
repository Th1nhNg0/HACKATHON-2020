<template>
  <div class="min-h-full">
    <ul class="messages" v-chat-scroll="{ always: false, smooth: true }">
      <li class="message" v-for="n in messages" :key="n">
        <strong>{{ n.author }}</strong
        >: {{ n.message }}
      </li>
    </ul>
    <div class="flex flex-row w-full">
      <input type="text" class="rounded-full" />
      <button class="bg-green-400 rounded-full px-2">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      messages: [
        {
          message: "asdasd",
          author: "WR",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* .message li {
    background-color: transparent !important;
  } */
</style>
