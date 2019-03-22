<template>
  <div>
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="100"
      :is-resizable="false"
      :is-mirrored="false"
      :margin="[10, 10]"
    >
      <grid-item
        v-for="item in layout"
        v-bind:key="item"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <component v-bind:is="item.component"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import WeatherTile from "../components/WeatherTile.vue";
import RTSInfoTile from "../components/RTSInfoTile.vue";
import YoutubeFeed from "../components/YoutubeFeed.vue";
import RTSLiveRadioTile from "../components/RTSLiveRadioTile.vue";

export default {
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 2, i: "0", component: "WeatherTile" },
        { x: 4, y: 0, w: 4, h: 2, i: "1", component: "RTSInfoTile" },
        { x: 8, y: 0, w: 4, h: 2, i: "2", component: "YoutubeFeed" },
        { x: 0, y: 1, w: 4, h: 2, i: "2", component: "RTSLiveRadioTile" }
      ]
    };
  },
  components: {
    WeatherTile,
    RTSInfoTile,
    YoutubeFeed,
    RTSLiveRadioTile
  }
};
</script>
