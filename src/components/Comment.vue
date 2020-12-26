<template>
  <div>
    <div>
      <span class="text-2xl">HÃY ĐỂ LẠI BÌNH LUẬN NHÉ</span>
      <input
        @keyup.enter="send"
        class="h-32 w-full"
        type="text"
        v-model="content"
      />
      <button @click="send">Bình luận</button>
    </div>
    <div v-for="(c, i) in comments" :key="i" class="pt-5">
      <div class="bg-white p-6 rounded-xl">
        <span>
          <strong>{{ c.user }}</strong>
          {{ new Date(c.createdAt * 1000) }}
        </span>
        <p>{{ c.content }}</p>
      </div>
    </div>
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
  props: ["id"],
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
    send() {
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
    },
  },
};
</script>
