<template>
  <div>
    <v-container :fluid="true">
      <v-layout wrap>
        <v-flex xs-4 mr-2>
          <WeatherTile></WeatherTile>
        </v-flex>
        <v-flex xs-4 mr-2>
          <RTSInfoTile></RTSInfoTile>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WeatherTile from "../components/WeatherTile.vue";
import RTSInfoTile from "../components/RTSInfoTile.vue";

export default {
  components: {
    WeatherTile,
    RTSInfoTile
  }
};
</script>
