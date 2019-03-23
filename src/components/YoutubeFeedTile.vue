<template>
  <v-card>
    <v-card-title>
      <h2>Youtube</h2>
    </v-card-title>
    <!--<div class="g-signin2" data-onsuccess="onSignIn"></div>-->
    <button id="execute-request-button" @click="signIn">Connexion</button>
  </v-card>
</template>
<script>
import axios from 'axios';
import Youtube from "../services/YoutubeService";

const base_url = "https://www.googleapis.com/youtube/v3";

export default {
  name: "Youtube",
  data() {
    return {
      subscriptionList: [],
      videoList: [],
      
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

    getSubscription: function(page) {
      // Get a page of subscriptions for the authentified user
      const googleAuth = JSON.parse(localStorage.googleAuth);
      const access_token = googleAuth.Zi.access_token;
      return axios.get(`${base_url}/subscriptions?access_token=${access_token}`, {
        params: {
          mine: "true",
          part: "snippet,contentDetails",
          maxResults: 50,
          pageToken: page,
        }
      });
    },

    getSubscriptionList: function(page) {
      // Save this object for using it later in an forEach
      let that = this;
      // Get the complete list of subcription of the authentified user
      const googleAuth = JSON.parse(localStorage.googleAuth);
      const access_token = googleAuth.Zi.access_token;
      this.getSubscription(page).then(result => {
        // Store the subscriptions
        for (var i = 0; i < result.data.items.length; i++) {
          this.subscriptionList.push(result.data.items[i]);
        }
        // Check if there are still other subscriptions
        if (result.data.nextPageToken) {
          // Get the next page of subcriptions if the pageToken is not undefined
          this.getSubscriptionList(result.data.nextPageToken);
        } else {
          // Get the most recents videos for each subscriptions
          this.subscriptionList.forEach(function(subscription) {
            let channelId = subscription.snippet.resourceId.channelId;
            that.getChannelLatestVideos(channelId)
            .then(result => {
              // Store the videos
              for (var i = 0; i < result.data.items.length; i++) {
                that.videoList.push(result.data.items[i]);
              }
            });
          });
          //TODO: after forEach, sort the videos by date (snippet.publishedAt)

          //TODO: create frame for each videos (with a scrollbar)
        }
      });
    },

    getChannelLatestVideos: function(channel) {
      const nbResultMax = 5;
      return axios.get(`${base_url}/activities`, {
        params: {
          channelId: channel,
          part: "snippet,contentDetails",
          maxResults: nbResultMax,
          key: process.env.VUE_APP_YOUTUBE_API_KEY,
        }
      });
    },

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
