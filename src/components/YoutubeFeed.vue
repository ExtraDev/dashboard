<template>
  <v-card>
    <v-card-title>
      <h2>Youtube</h2>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </v-card-title>
  </v-card>
</template>
<script>
import Youtube from "../services/YoutubeService";

export default {
  name: "Youtube",
  data() {
    return {};
  },
  mounted: function() {
    Youtube.getSubscriptionFeed()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
</script>
