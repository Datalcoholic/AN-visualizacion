<template>
  <div id="app">
    <div class="master-container">
      <div class="container-1">
        <svg class="graph-container" width="1100" height="700">
          <rect width="1100" height="620" fill="#6d6d6d41" />
        </svg>
      </div>
      <scroll_text :stepsText="stepsText" />

      <div class="container-2"></div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
//import ScrollMagic from "scrollmagic";
import scroll_text from "./components/scroll_texts.vue";
//const ScrollMagic = require("scrollmagic");
const ScrollMagic = require("scrollmagic");
require("scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
require("scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");

const steps = require("./text");
console.log(steps);

export default {
  name: "app",
  components: {
    scroll_text
  },
  data() {
    return {
      stepsText: steps
    };
  },

  mounted() {
    const controller = new ScrollMagic.Controller();

    const stepScene = new ScrollMagic.Scene({
      triggerElement: ".step"
    })
      .setTween(".step", 0.5, { opacity: 1 })
      .addIndicators({ name: "test" })
      .addTo(controller);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed:400,600,900&display=swap");
#app {
  font-family: "Barlow Condensed", Helvetica, Arial, sans-serif;
}

.master-container {
  height: 250%vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-color: black;
  border-style: solid;
  border-width: 2.5px;
}
.container-1 {
  position: sticky;
  top: 0;
  height: 1000vh;
  width: 100%;
  border-style: solid;
  border-color: rgb(89, 0, 255);
  border-width: 3.5px;
}
.container-2 {
  position: sticky;
  top: 0px;
  height: 1000em;
  border-style: solid;
  border-color: rgb(89, 0, 255);
  border-width: 3.5px;
}

.graph-container {
  margin: 20px 50%;
  transform: translate(-50%);
}
</style>
