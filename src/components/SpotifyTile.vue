<template>
<v-layout row wrap>
  <v-flex md12>
    <v-card>
      <v-card-title>
        <v-flex xs12 md6>
          <h2>Spotify</h2>
        </v-flex>

        <v-flex xs12 md6>
          <v-text-field
            label="Artist"
            box
            v-model="artistName"
          ></v-text-field>
        </v-flex>
      </v-card-title>

      <v-flex xs12>
        <iframe
          v-if="artistName != ''" 
          src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A5ht7ItJgpBH7W6vJ5BqpPr"
          width="100%"
          height="380" 
          frameborder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
        ></iframe>
      </v-flex>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import * as SpotifyWebApi from 'spotify-web-api-js'

export default {
  data() {
    return {
      spotifyWebApi: new SpotifyWebApi({
        clientId: 'd6ad0ea6de484dd2bee0cf27f7af2263'
      }),
      artistName: ''
    };
  },
  mounted: function() {
    this.spotifyWebApi.searchArtists('Love')
      .then(function(data) {
        console.log('Search artists by "Love"', data);
      }, function(err) {
        console.error(err);
      });
  },
  methods: {
    onChange: function() {
      
    },
  }

};
</script>

<style scoped>
h2 {
  margin-top: -15px;
}
</style>