import axios from 'axios';

const BASE_URL = 'https://api.apixu.com/v1';

export default {
  getForecast(name, days = 5) {
    return axios.get(`${BASE_URL}/forecast.json?key=${process.env.VUE_APP_WEATHER_API}&q=${name}&days=${days}`);
  }

}