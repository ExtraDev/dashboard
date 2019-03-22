import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
//
import VueMoment from 'vue-moment'
//
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.use(VueMoment)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
