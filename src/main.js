import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
//
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

import GAuth from 'vue-google-oauth2';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.use(GAuth, {
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner',
  prompt: 'select_account'
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
