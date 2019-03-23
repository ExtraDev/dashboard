<template>
  <v-card>
    <v-card-title>
      <h2>
        <slot></slot>
      </h2>
    </v-card-title>
    <v-flex xs12>
      <iframe
        width="100%"
        height="auto"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        referrerpolicy="no-referrer-when-downgrade"
        allow="autoplay; encrypted-media"
        :src="params.channel_src"
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