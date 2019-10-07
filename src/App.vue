<template>
  <div id="app">
    <div class="master-container">
      <div class="container-1">
        <svg class="graph-container" width="1100" height="700">
          <rect width="1100" height="620" fill="#6d6d6d41" />
        </svg>
        <Scrollama @step-enter="stepEnterHandler" :debug="true" :offset="0.5">
          <scroll_text :stepsText="stepsText" />
        </Scrollama>
      </div>
      <div class="container-2"></div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
import scroll_text from "./components/scroll_texts.vue";
import "intersection-observer"; // for cross-browser support
import Scrollama from "vue-scrollama";

const steps = require("./text");
console.log(steps);

export default {
  name: "app",
  components: {
    scroll_text,
    Scrollama
  },
  data() {
    return {
      stepsText: steps
    };
  },

  mounted() {},

  methods: {
    stepEnterHandler({ element, index, direction }) {
      // handle the step-event as required here
      console.log(element, index, direction);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed:400,600,900&display=swap");
#app {
  font-family: "Barlow Condensed", Helvetica, Arial, sans-serif;
}

.master-container {
  height: 250%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-color: black; */
  /* border-style: solid;
  border-width: 2.5px; */
}
.container-1 {
  top: 0;
  height: 1000vh;
  width: 100%;
  /* border-style: solid; */
  /* border-color: rgb(89, 0, 255); */
  /* border-width: 3.5px; */
}
.container-2 {
  height: 100vh;
  position: sticky;
  top: 0px;
  /* border-style: solid; */
  /* border-color: rgb(89, 0, 255); */
  /* border-width: 3.5px; */
}

.scrollama-steps {
  position: relative;
  padding: 0 30rem;
  margin: 0;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
}

.graph-container {
  position: sticky;
  top: 10px;
  margin: 20px 50%;
  transform: translate(-50%);
}
</style>
