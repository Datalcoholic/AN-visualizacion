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
const steps = require("./text");
import scroll_text from "./components/scroll_texts.vue";
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
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
