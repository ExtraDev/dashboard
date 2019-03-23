<template>
  <v-card>
    <v-card-title>
      <h2>
        <slot></slot>
      </h2>
    </v-card-title>
    <iframe
      id="30082e045014815a01e1a45566d80b0e"
      width="100%"
      height="auto"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      referrerpolicy="no-referrer-when-downgrade"
      allow="autoplay; encrypted-media"
      src
    ></iframe>
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
  mounted: function() {
    document.getElementById(
      "30082e045014815a01e1a45566d80b0e"
    ).src = this.params.channel_src;
  }
};
</script>

<style scoped>
</style>