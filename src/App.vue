<template>
  <div id="app">
    <div id="container">
      <div class="col">
        <div class="small-block">WhatsApp</div>
        <div class="small-block">Discord</div>
        <div class="medium-block">
          <!-- <a
            class="twitter-timeline"
            href="https://twitter.com/UbuntuBudgie?ref_src=twsrc%5Etfw"
          >Tweets by UbuntuBudgie</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
        </div>
        <div class="medium-block">
          <iframe
            src="https://www.youtube.com/embed/VtX9sqFZ3FE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="small-block">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
      <div class="col">
        <div class="medium-block">Gmail</div>
        <div class="gig-block">Tribune de genève</div>
        <div class="small-block">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
      <div class="col">
        <div class="medium-block">
          <iframe src="https://www.rts.ch/play/radio/livepopup/couleur-3" frameborder="0"></iframe>
        </div>
        <div class="small-block">
          <iframe
            src="https://open.spotify.com/browse/featured?_ga=2.210986325.1105733321.1552171696-1096373429.1552171696"
            frameborder="0"
          ></iframe>
        </div>
        <div class="small-block">Youtube</div>
        <div class="medium-block">Bourse</div>
        <div class="small-block">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
body, html {
  margin: 0;
  padding: 0;
  background-color: #EAEAEA;
  font-family: sans-serif;
}

h3 {
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  height: 50px;
  background-color: #c5baba;
  text-align: center;
}
header h3 {
  padding-top: 15px;
}
header #right {
  float: right;
  margin-top: -20px;
  margin-right: 5px;
}

#container {
  width: 100%;
  height: 90vh;
  margin: auto;
  border-radius: 5px;
}
#container iframe {
  width: 100%;
  height: 100%;
}
#container .col {
  float: left;
  width: 33.3%;
  height: auto;
  border-radius: 5px;
}
#container .col .small-block {
  width: 95%;
  height: 100px;
  margin: auto;
  margin: 9px;
  background-color: white;
  border-radius: 3px;
}
#container .col .medium-block {
  width: 95%;
  height: 300px;
  margin: auto;
  margin: 9px;
  background-color: white;
  border-radius: 3px;
  overflow-y: auto;
}
#container .col .gig-block {
  width: 95%;
  height: 500px;
  margin: auto;
  margin: 9px;
  background-color: white;
  border-radius: 3px;
}
#container .col i {
  width: 100%;
  text-align: center;
  margin-top: 10.5%;
}

@media screen and (max-width: 640px) {
  #container .col {
    width: 100%;
    height: auto;
  }
}

/*# sourceMappingURL=style.css.map */

</style>
