<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot 
        :img="spotlight.img" 
        :title="spotlight.title" 
        :description="spotlight.description">
      </slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([])
    const getSpotlights = async() => {
      const baseUrl = 'https://job-finder-35iy.onrender.com';
      const url = `${baseUrl}/spotlights`;
      const response = await axios.get(url)
      spotlights.value = response.data;
    }
    onMounted(getSpotlights)
    return { spotlights }
  }
}
</script>