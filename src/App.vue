<template>
  <v-app :dark="darkMode">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Media Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/about" flat>
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn flat @click.stop="drawer = !drawer">Options</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer v-model="drawer" right absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>Dark mode</v-list-tile-content>
          <v-switch flat v-model="darkMode">Options</v-switch>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import RTSService from "./services/RTSService";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      drawer: false,
      darkMode: false
    };
  },
  mounted: async function() {
    let generateAccessToken = false;

    if (localStorage.rtsToken) {
      const rtsToken = JSON.parse(localStorage.rtsToken);
      const tokenExpirationDate =
        parseInt(rtsToken.issued_at) + parseInt(rtsToken.expires_in);
      const currentDate = new Date().getTime();

      if (tokenExpirationDate < currentDate) {
        generateAccessToken = true;
      }
    } else {
      generateAccessToken = true;
    }

    // Generates a new access token for the RTS API
    if (generateAccessToken) {
      await RTSService.getAccessToken()
        .then(res => res.data)
        .then(data => {
          localStorage.rtsToken = JSON.stringify({
            access_token: data.access_token,
            client_id: data.client_id,
            token_type: data.token_type,
            expires_in: data.expires_in,
            issued_at: data.issued_at
          });
        });
    }
  }
};
</script>
