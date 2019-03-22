<template>
  <v-card>
    <v-card-title>
      <h2>RTS Info</h2>
    </v-card-title>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted: function() {
    /*axios
      .get(
        "http://api.srgssr.ch/forecasts/v1.0/weather/current",
        {},
        {
          headers: {
            Authorization:
              "bearer " + localStorage.getItem("rtsToken").access_token
          },
          crossDomain: true
        }
      )
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });*/
  }
};
</script>

<style scoped>
</style>