<template>
  <v-layout row wrap>

    <v-flex xs12>
      <v-card>
        <v-card-title>
          <v-flex md-6>
            <h2>Weather - {{ city.name }}</h2>
          </v-flex>

          <v-flex md-6>
            <v-select
              :items="cities"
              label="City"
              item-text="name"
              v-model="city.name"
              v-on:change="onChange"
            ></v-select>
          </v-flex>
        </v-card-title>

        <v-flex xs12>
          <v-layout row>
            <v-flex xs-12>
              <v-card-title primary-title>
                <h3>Today</h3>
              </v-card-title>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-card-title primary-title>
                <img :src="weather.current.condition.icon" alt="">
                <h4>{{ weather.current.temp_c }} °C</h4>
              </v-card-title>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-card-title primary-title class="mt-20">
                <img src="/images/icons/drop.png" class="weather-icon" alt="">
                <h4>{{ weather.current.humidity }} %</h4>
              </v-card-title>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-card-title primary-title class="mt-20">
                <img src="/images/icons/wind.png" class="weather-icon" alt="">
                <h4>{{ windInKmh(weather.current.wind_mph) }} km/h</h4>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>
                <img :src="props.item.day.condition.icon" width="40">
              </td>
              <td>{{ props.item.date | moment("dddd, Do")}}</td>
              <td>{{ props.item.day.avgtemp_c }} <b>°C</b></td>
              <td>{{ props.item.day.avghumidity }} <b>%</b> </td>
              <td>{{ windInKmh(props.item.day.maxwind_mph) }} <b>km/h</b></td>
            </template>
          </v-data-table>
        </v-flex>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import WeatherService from '../services/WeatherService';

const MPH_TO_KMH_FACTOR = 1.609;

export default {
  data() {
    return {
      cities: [
         {
          "id": 6458783,
          "name": "Geneva",
          "country": "CH",
          "coord": {
            "lon": 6.12737,
            "lat": 46.208038
          }
        },
        {
          "id": 2657896,
          "name": "Zurich",
          "country": "CH",
          "coord": {
            "lon": 8.55,
            "lat": 47.366669
          }
        },
        {
          "id": 2661552,
          "name": "Bern",
          "country": "CH",
          "coord": {
            "lon": 7.44744,
            "lat": 46.94809
          }
        },
        {
          "id": 2659836,
          "name": "Lugano",
          "country": "CH",
          "coord": {
            "lon": 8.96004,
            "lat": 46.010078
          }
        },
      ],
      city: {
        "id": 6458783,
        "name": "Geneva",
        "country": "CH",
        "coord": {
          "lon": 6.12737,
          "lat": 46.208038
        }
      },
      weather: {
        current: {
          condition: {},
        }
      },
      headers: [
        { text: '', sortable: false },
        { text: 'Day', value: 'date', sortable: true },
        { text: 'Temperature', value: 'day.avgtemp_c', sortable: true },
        { text: 'Humidity', value: 'day.avghumidity', sortable: true },
        { text: 'Wind', value: 'day.maxwind_mph', sortable: true },
      ],
      items: [],
    }
  },
  mounted: function() {
    this.loadWeather();
  },
  methods: {
    loadWeather: function() {
      WeatherService.getForecast(this.city.name, 5)
        .then(res => res.data)
        .then(data => {
          this.weather = data;
          this.items = this.weather.forecast.forecastday;
        })
    },
    onChange: function() {
      this.loadWeather();
    },
    windInKmh: function(windMph) {
      return (windMph * MPH_TO_KMH_FACTOR).toFixed(2);
    }
  }
}
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}

.weather-icon {
  width: 24px;
  height: 24px;
  margin-right: 24px;
}
</style>

