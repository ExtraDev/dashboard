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

    const accessToken = JSON.parse(localStorage.rtsToken).access_token;

    fetch('https://api.srgssr.ch/forecasts/v1.0/weather/current/?latitude=46.2&longitude=6.1667', {
      method: 'GET',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      })
    })
      .then(response => {
        console.log(response)
      })
      .catch((err) => console.log(err));
  },
}
</script>

<style scoped>

</style>
