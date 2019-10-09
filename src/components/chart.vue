<template>
  <div class="chart-container">
    <svg class="graph-container" :width="width" :height="height">
      <g class="bancadas_containers">
        <rect
          class="back_svg"
          v-for="(ban, num) in bancadas"
          :key="num"
          :x="[bancBands(ban)]"
          :y="20"
          :width="[espacios]"
          height="750"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "chart",
  props: ["bancadas"],
  data() {
    return {
      width: 1100,
      height: 800,
      chartWidth: null,
      backHeight: this.height - 10,
      espacios: null
    };
  },

  methods: {
    bancDivision(value) {
      const x = d3
        .scalePoint()
        .domain(this.bancadas)
        .range([0, this.width])
        .padding(0.1);
      this.espacios = x.step();
      console.log(x.padding());
      return x(value);
    },

    bancBands(value) {
      const bands = d3
        .scaleBand()
        .domain(this.bancadas)
        .range([0, this.width])
        .paddingInner(0.1);
      this.espacios = bands.bandwidth();
      return bands(value);
    },

    spacios() {
      return (this.width - this.espacios) / this.bancadas.length;
    }
  }
};
</script>

<style scoped>
.chart-container {
  position: sticky;
  top: 20px;
}
.graph-container {
  margin: 20px 50%;
  transform: translate(-50%);
  background: rgb(232, 232, 233);
}
/* .bancadas_containers {
  transform: translate(-55px);
} */

.back_svg {
  fill: rgb(218, 218, 219);
  z-index: 3;
}
</style>