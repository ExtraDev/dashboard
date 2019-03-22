import axios from 'axios';

export default {

  getAccessToken() {
    return axios.post('https://api.srgssr.ch/oauth/v1/accesstoken?grant_type=client_credentials', {}, {
      auth: {
        username: process.env.VUE_APP_RTS_API_CONSUMER_KEY,
        password: process.env.VUE_APP_RTS_API_SECRET
      }
    })
  },
  //
}
