<template>
  <div>
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="100"
      :is-mirrored="false"
      :margin="[20, 20]"
    >
      <grid-item
        v-for="item in layout"
        v-bind:key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :min-w="item.minW"
        :min-h="item.minH"
        :i="item.i"
      >
        <component v-bind:is="item.component"></component>
      </grid-item>
      <v-btn v-on:click="addTile" absolute bottom right fab>
        <v-icon>add</v-icon>
      </v-btn>
    </grid-layout>
  </div>
</template>

<script>
import AboutTile from "../components/AboutTile.vue";
import WeatherTile from "../components/WeatherTile.vue";
import RTSInfoTile from "../components/RTSInfoTile.vue";
import YoutubeFeed from "../components/YoutubeFeed.vue";
import RTSLiveRadioTile from "../components/RTSLiveRadioTile.vue";

export default {
  data() {
    return {
      layout: [
        {
          x: 4,
          y: 0,
          w: 4,
          h: 2,
          minW: 4,
          minH: 2,
          i: "0",
          component: "AboutTile"
        }
      ]
    };
  },
  components: {
    WeatherTile,
    RTSInfoTile,
    YoutubeFeed,
    RTSLiveRadioTile,
    AboutTile
  },
  methods: {
    addTile: function() {
      let posX = 0,
        posY = 0,
        width = 4,
        height = 2,
        minWidth = 4,
        minHeight = 2,
        id = 0,
        component = "RTSLiveRadioTile";

      if (this.layout[0].component == "AboutTile") {
        this.layout = [];
      } else {
        let lastLayout = this.layout[this.layout.length - 1];

        if (lastLayout.x != 8) {
          posX = lastLayout.x + 4;
          posY = lastLayout.y;
        } else {
          posY = lastLayout.y + 1;
        }

        id = lastLayout.i + 1;
      }

      let newLayout = {
        x: posX,
        y: posY,
        w: width,
        h: height,
        minW: minWidth,
        minH: minHeight,
        i: id,
        component: component
      };

      this.layout.push(newLayout);
    }
  }
};
</script>
