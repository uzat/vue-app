import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/uzat/vuedb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  },

}
