<script setup>
import EventCard from '../components/EventCard.vue';
import { onMounted, ref, watch } from 'vue';
import EventService from '@/services/EventService';

const props = defineProps(["page"])

const events = ref(null)

const fetchEvents = () => {
  EventService.getEvents(2, props.page)
    .then((response) => {
      events.value = response.data
    }).catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  fetchEvents()
})

// to fix the events not loading after the page is mounted
watch(
  () => props.page, () => {
    events.value = null
    fetchEvents()
  }
)

</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1">Prev Page
    </router-link>

    <router-link :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">Next Page</router-link>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
