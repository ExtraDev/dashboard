import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueGridLayout from "vue-grid-layout"
//
import VueMoment from 'vue-moment'
//
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.use(VueMoment)

Vue.config.productionTip = false;

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;

new Vue({
  router,
  components: {
    GridLayout,
    GridItem,
  },
  render: h => h(App)
}).$mount("#app");