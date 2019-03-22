<template>
  <div>
    <div>
      <h2>Youtube</h2>
    </div>
  </div>
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
