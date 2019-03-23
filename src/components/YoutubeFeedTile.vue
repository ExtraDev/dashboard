<template>
  <v-layout row wrap>
    <v-card>
      <v-card-title>
        <v-flex md-6>
          <img class="logo-yt" src="/images/icons/yt_logo_rgb_light.png">
        </v-flex>
      </v-card-title>
      <v-flex md-6>
        <button id="execute-request-button" @click="signIn">Connexion</button>
        <div v-for="video in videoList" :key="video.contentDetails.upload.videoId">
          <iframe
            class="youtube-player"
            width="450"
            height="285"
            :src="`https://www.youtube.com/embed/` + video.contentDetails.upload.videoId"
          ></iframe>
        </div>
      </v-flex>
    </v-card>
  </v-layout>
</template>
<script>
import axios from "axios";
import Youtube from "../services/YoutubeService";

import { debug } from "util";

const base_url = "https://www.googleapis.com/youtube/v3";

export default {
  name: "Youtube",

  data() {
    return {
      subscriptionList: [],
      videoList: []
    };
  },
  methods: {
    signIn: function() {
      this.$gAuth
        .signIn()
        .then(user => {
          // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
          localStorage.googleAuth = JSON.stringify(user);
          this.isSignIn = this.$gAuth.isAuthorized;

          this.getSubscriptionList();
        })
        .catch(error => {
          // On fail do something
          console.log(error);
        });
    },

    getSubscriptionList: function(page) {
      // Get the complete list of subcription of the authentified user
      const googleAuth = JSON.parse(localStorage.googleAuth);
      const access_token = googleAuth.Zi.access_token;
      Youtube.getSubscription(page).then(result => {
        // Store the subscriptions
        result.data.items.map(item => this.subscriptionList.push(item));
        // Check if there are still other subscriptions
        if (1 == 2 /*result.data.nextPageToken*/) {
          // Get the next page of subcriptions if the pageToken is not undefined
          this.getSubscriptionList(result.data.nextPageToken);
        } else {
          // Get the most recents videos for each subscriptions
          this.subscriptionList.map((channel, i) => {
            Youtube.getChannelLatestVideos(
              channel.snippet.resourceId.channelId
            ).then(res => {
              // Store the videos
              res.data.items.map(item => this.videoList.push(item));
              this.sortChannel();
              this.videoList = this.videoList.slice(0, 4); // TODO: Improve the final number of video displayed
            });
          });
        }
      });
    },

    sortChannel: function() {
      this.videoList.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
        );
      });
    }
  },

  mounted: function() {
    let generateAccessToken = false;
    if (localStorage.googleAuth) {
      const googleAuth = JSON.parse(localStorage.googleAuth);
      const tokenExpirationDate =
        parseInt(googleAuth.expires_at) + parseInt(googleAuth.expires_in);
      const currentDate = new Date().getTime();

      if (tokenExpirationDate < currentDate) {
        generateAccessToken = true;
      }
    } else {
      generateAccessToken = true;
    }

    if (generateAccessToken) {
      //tODO: open the pop up for authentified the user
    } else {
      this.getSubscriptionList();
    }
  }
};
</script>
<style lang="scss" scoped>
.youtube-player {
  width: 470px;
  height: 230px;
  margin: 5px;
}

.logo-yt {
  width: 50%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>

