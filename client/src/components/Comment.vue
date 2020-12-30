<template>
  <div>
    <h1 class="text-2xl font-bold">Bình luận</h1>
    <div v-if="comments.length == 0">Không có bình luận nào</div>
    <div v-else v-for="(c, i) in comments" :key="i" class="pt-5 text-black ">
      <div
        class=" p-6 rounded-xl shadow-md"
        :style="{ backgroundColor: color }"
      >
        <span>
          <strong>{{ c.user }}</strong>
          {{ time(c) }}
        </span>
        <p>{{ c.content }}</p>
      </div>
    </div>
    <h1 class="text-2xl my-5 font-bold">Để lại bình luận:</h1>
    <textarea
      @keyup.enter="send"
      :style="{ backgroundColor: color }"
      class="h-32 w-full p-5 rounded-2xl text-black"
      type="text"
      v-model="content"
      cols="30"
      rows="10"
    ></textarea>
    <button
      @click="send"
      class="bg-green-500 w-full py-4 mt-5 text-white font-bold text-2xl rounded-2xl shadow-md"
    >
      Bình luận
    </button>
  </div>
</template>
<script>
import { quesCollection } from "../firebase";
export default {
  name: "Comments",
  data() {
    return {
      comments: [],
      content: "",
    };
  },
  props: ["id", "color"],
  mounted() {
    quesCollection
      .doc(this.id)
      .collection("discussions")
      .get()
      .then((res) => {
        res.forEach((r) => {
          this.comments.unshift(r.data());
        });
      });
    quesCollection.onSnapshot();
  },
  methods: {
    time(c) {
      let date = new Date(c.createdAt);

      return date.toLocaleString();
    },
    send() {
      if (this.content === "") return;
      let d = {
        content: this.content,
        user: this.$store.state.username,
        createdAt: Date.now(),
      };
      quesCollection
        .doc(this.id)
        .collection("discussions")
        .add(d)
        .then(() => {
          this.comments.unshift(d);
        });
      this.content = "";
    },
  },
};
</script>
