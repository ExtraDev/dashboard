<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Media Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" flat>
        <span class="mr-2">About</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
