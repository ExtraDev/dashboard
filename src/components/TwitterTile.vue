<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-card>
        <v-card-title>
          <h2>
            <slot></slot>
          </h2>
        </v-card-title>

        <v-flex xs12>
          <Timeline id="RadioTeleSuisse" :sourceType="'likes'" :options="{ theme: 'dark', tweetLimit: '3' }" />
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Timeline
  }
};
</script>

<style lang="scss" scoped>
.timeline-Widget {
  border-radius: 0px;
}
</style>
