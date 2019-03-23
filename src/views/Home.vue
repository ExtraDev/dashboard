<template>
  <div>
    <grid-layout
      :layout="tiles"
      :col-num="12"
      :row-height="100"
      :is-mirrored="false"
      :margin="[20, 20]"
    >
      <grid-item
        v-for="item in tiles"
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
      <v-btn v-on:click="sheet = true" absolute bottom right fab>
        <v-icon>add</v-icon>
      </v-btn>
    </grid-layout>

    <v-bottom-sheet v-model="sheet">
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-tile v-for="tile in compList" :key="tile.title" @click="addTile(tile.component)">
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import AboutTile from "../components/AboutTile.vue";
import WeatherTile from "../components/WeatherTile.vue";
import RTSInfoTile from "../components/RTSInfoTile.vue";
import YoutubeFeedTile from "../components/YoutubeFeedTile.vue";
import RTSLiveRadioTile from "../components/RTSLiveRadioTile.vue";

export default {
  data() {
    return {
      sheet: false,
      compList: [
        {
          img: "./images/icons/sunny.png",
          title: "Weather",
          component: "WeatherTile"
        },
        {
          img: "./images/icons/televisions.png",
          title: "RTSInfo",
          component: "RTSInfoTile"
        },
        {
          img: "./images/icons/radio.png",
          title: "RTSLiveRadio",
          component: "RTSLiveRadioTile"
        },
        {
          img: "./images/icons/youtube.png",
          title: "YoutubeFeed",
          component: "YoutubeFeedTile"
        }
      ],
      tiles: [
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
    YoutubeFeedTile,
    RTSLiveRadioTile,
    AboutTile
  },
  methods: {
    addTile: function(component) {
      let posX = 0,
        posY = 0,
        width = 4,
        height = 2,
        minWidth = 4,
        minHeight = 2,
        id = 0;

      if (this.tiles[0].component == "AboutTile") {
        this.tiles = [];
      } else {
        let lastTiles = this.tiles[this.tiles.length - 1];

        if (lastTiles.x != 8) {
          posX = lastTiles.x + 4;
          posY = lastTiles.y;
        } else {
          posY = lastTiles.y + 1;
        }

        id = lastTiles.i + 1;
      }

      let newTiles = {
        x: posX,
        y: posY,
        w: width,
        h: height,
        minW: minWidth,
        minH: minHeight,
        i: id,
        component: component
      };

      this.tiles.push(newTiles);
      this.sheet = false;
    }
  }
};
</script>
