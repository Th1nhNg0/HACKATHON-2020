<template>
  <div class="container mx-auto">
    <div class="text-center text-2xl"><span>Welcome to World Week Leaderboard</span></div>
    <table class="w-full text-center bg-white rounded-2xl shadow-lg">
      <tr>
        <th colspan="2"></th>
        <th></th>
        <th>Score</th>
        <th>Total games</th>
      </tr>
      <tr class="border-t-2 border-red-400" v-for="(record, index) in records" :key="index">
        <td>{{record.id}}</td>
        <td class="text-left" colspan="2">{{record.name}}</td>
        <td>{{record.distance}}</td>
        <td>{{record.avrSpeed}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
      return {
          records : [
              {
                  id: 1,
                  name: "Helena Smith",
                  distance: "120km",
                  avrSpeed: "20km/h"
              }
          ]
      }
  }
};
</script>
