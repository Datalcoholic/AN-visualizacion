<template>
  <div id="app">
    <div class="master-container">
      <div class="container-1">
        <chart v-bind="{bancadas}" />
        <!-- <newChart v-bind="{bancadas}" /> -->

        <Scrollama
          @step-enter="stepTextHandler"
          @step-exit="textleavaeHandler"
          :debug="true"
          :offset="0.7"
        >
          <div v-for="(step, i) in stepsText" :key="i" :class="step" :id="['step_'+[i+1]]">
            <p>{{step.step}}</p>
          </div>
        </Scrollama>
      </div>
      <div class="container-2"></div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
import Scrollama from "vue-scrollama";
import chart from "./components/chart";
import NewChart from "./components/newChart";

const steps = require("./text");

const bancadasArray = [
  { name: "Oficialismo", count: 0 },
  // { name: "Disidentes Psuv", count: 0 },
  { name: "Oposicion", count: 0 }
];
export default {
  name: "app",
  components: {
    Scrollama,
    chart,
    NewChart
  },
  data() {
    return {
      stepsText: steps,
      bancadas: bancadasArray
    };
  },

  mounted() {},

  methods: {
    stepEnterHandler({ element, index, direction }) {
      // handle the step-event as required here
      console.log(element, index, direction);
      TweenMax.to(element, 1, { opacity: 1 });
    },

    stepTextHandler({ element, index, direction }) {
      // MAneja la opacidad de los step
      switch (direction) {
        case "down":
          TweenMax.to(element, 0.8, { opacity: 1 });
          break;

        default:
          TweenMax.to(element, 0.2, { opacity: 0 });
          break;
      }
      // Agrega elementos a Bancadas
      if (element.id === "step_1" && direction === "down") {
        this.bancadas.push({ name: "Concertacion", count: 0 });
      } else if (element.id === "step_1" && direction === "up") {
        this.bancadas = this.bancadas.filter(d => d.name !== "Concertacion");
      }
    },
    textleavaeHandler({ element, index, direction }) {
      if (element.id === "step_1" && direction === "down") {
        //console.log(element);
      }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-color: black; */
  /* border-style: solid;
  border-width: 2.5px; */
}
.container-1 {
  top: 0;
  height: 900vh;

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
  flex-direction: column;
}

.step {
  opacity: 0;
  padding: 5vh 0;
  margin-top: 20em;
  margin-bottom: 0rem;
  background: rgba(255, 255, 255, 0.39);
  width: 50vw;
  display: flex;
  border: 1px solid blue;
  border-radius: 14px;
}

.step > p {
  font-family: "Barlow";
  font-weight: 400;
  font-size: 16.5px;
  margin: 10px;
}
</style>
