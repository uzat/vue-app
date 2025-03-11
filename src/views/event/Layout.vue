<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../../services/EventService'

const event = ref('null')
const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    }).catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1> {{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>
