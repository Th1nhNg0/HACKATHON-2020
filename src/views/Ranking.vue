<template>
  <div class="container mx-auto py-10">
    <Navbar />
    <h1 class="text-center text-4xl text-white font-bold">
      Bảng xếp hạng
    </h1>
    <table class="w-full text-left mt-5  bg-white rounded-2xl shadow-lg">
      <tr>
        <th colspan="2" class="text-center py-4">Rank</th>
        <th>Username</th>
        <th>Total games</th>
        <th>Score</th>
      </tr>
      <tr
        class="border-t-2 border-red-400"
        v-for="(record, index) in records"
        :key="index"
      >
        <td colspan="2" class="text-center">{{ index + 1 }}</td>
        <td class="py-4">{{ record.name }}</td>
        <td>{{ record.totalGame }}</td>
        <td>{{ record.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Ranking",
  components: { Navbar },
  data() {
    return {
      records: [],
    };
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.records.push({
        name: "User " + i,
        score: Math.floor(Math.random() * 1001),
        totalGame: Math.floor(Math.random() * 1001),
      });
    }
    this.records.sort((a, b) => b.score - a.score);
  },
};
</script>
