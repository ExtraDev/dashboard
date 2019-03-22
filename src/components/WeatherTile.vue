<template>
  <div class="v-card v-sheet theme--dark secondary">
    <div class="v-card__text px-3">
      <h2>Météo - Genève</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      
    }
  },
  mounted: function() {
    /*
    axios.get({
      method: 'GET',
      url: 'https://api.srgssr.ch/forecasts/v1.0/weather/current',
      data: {
        latitude: null,
        longitude: null
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    */
  },
}
</script>

<style scoped>

</style>
