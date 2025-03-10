<script setup>
import EventCard from '../components/EventCard.vue';
import { ref } from 'vue';

const events = ref([{
  id: 5928101,
  category: "animal welfare",
  organizer: "Adam",
  title: "Cat Cabaret",
  description: "Yay felines!",
  location: "Meow Town",
  date: "14 February, 2025",
  time: "2:00",
},
{
  id: 8419988,
  category: "animal welfare",
  organizer: "Adam",
  title: "Kitty Cluster",
  description: "Yay cats!",
  location: "Catlandia",
  date: "January 28, 2025",
  time: "7:00",
},
{
  id: 4582797,
  category: "animal welfare",
  organizer: "Adam",
  title: "Puppy Parade",
  description: "Yay pups!",
  location: "Puptown ",
  date: "March 14, 2025",
  time: "1:00",
}])
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
