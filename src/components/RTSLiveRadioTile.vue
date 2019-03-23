<template>
  <v-card>
    <v-card-title>
      <h2>
        <slot></slot>
      </h2>
    </v-card-title>
    <v-flex xs12>
      <iframe
        allowfullscreen
        width="100%"
        height="30px"
        frameborder="0"
        allow="geolocation *; autoplay; encrypted-media"
        :src="params.radio_src"
      ></iframe>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    params: Object
  },
  mounted: function() {}
};
</script>

<style scoped>
</style>