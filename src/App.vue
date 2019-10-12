<template>
  <div id="app">
    <div class="master-container">
      <div class="container-1">
        <chart v-bind="{bancadas, bancadasColorScale}" />
        <!-- <newChart v-bind="{bancadas}" /> -->

        <Scrollama @step-enter="stepTextHandler" :debug="true" :offset="0.85" threshold="50">
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

const steps = require("./text");

const bancadasArray = [
  // { name: "Disidentes Psuv", count: 0 },
  { name: "Oposicion", count: 112 }
];
export default {
  name: "app",
  components: {
    Scrollama,
    chart
  },
  data() {
    return {
      stepsText: steps,
      bancadas: bancadasArray,
      bancadasColorScale: [
        "Oficialismo",
        "Concertacion",
        "Disidentes Psuv",
        "Oposicion"
      ]
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
      // switch (direction) {
      //   case "down":
      //     TweenMax.to(element, 0.5, { opacity: 1 });
      //     break;

      //   default:
      //     TweenMax.to(element, 0.2, { opacity: 0 });
      //     break;
      // }
      console.log(`${element.id}_${direction}`);
      // Agrega elementos a Bancadas
      // switch (`${element.id}_${direction}`) {
      //   case "step_1_down":
      //     console.log("elemen", element.id);
      //   case "step_1_up":
      //     console.log("up", element.id);

      //     break;

      //   default:
      //     console.log("test");
      //     break;
      // }
      // if (element.id === "step_1" && direction === "down") {
      //   //this.bancadas.splice(1, 0, { name: "Concertacion", count: 0 });
      //   this.bancadas.push({ name: "Concertacion", count: 6 });

      // } else if (element.id === "step_1" && direction === "up") {
      //   this.bancadas = this.bancadas.filter(d => d.name !== "Concertacion");
      // } else if (element.id === "step_2" && direction === "down") {
      //   this.bancadas.push({ name: "Oficialismo", count: 55 });
      // } else if (element.id === "step_2" && direction === "up") {
      //   this.bancadas = this.bancadas.filter(d => d.name !== "Oficialismo");
      // } else if (element.id === "step_3" && direction === "down") {
      //   this.bancadas.push({ name: "Disidentes Psuv", count: 0 });
      // } else if (element.id === "step_3" && direction === "up") {
      //   this.bancadas = this.bancadas.filter(d => d.name !== "Disidentes Psuv");
      // }
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
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.step {
  opacity: 1;
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
