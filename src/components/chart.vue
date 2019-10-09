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
          :height="[svg_height]"
          rx="10"
          ry="10"
        />
        <text
          class="text_svg"
          v-for="(ban, num) in bancadas"
          :key="num + 10"
          :x="[bancBands(ban)]"
          :y="[svg_height + 50]"
          :fill="[bancColors(ban, num)]"
        >{{ban}}</text>
        <text
          class="textCount_svg"
          v-for="(ban, num) in count"
          :key="num + 30"
          :x="[num_bands(num) + 85]"
          :y="[svg_height + 100]"
          :fill="[bancColors(num)]"
        >{{ban}}</text>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

const colors = ["#DA2532", "#7225DA", "#8DDA25", "#25DACD"];

export default {
  name: "chart",
  props: ["bancadas", "count"],
  data() {
    return {
      width: 1100,
      height: 800,
      svg_height: null,
      espacios: null
    };
  },

  mounted() {
    this.svg_height = this.height * 0.7;
  },

  methods: {
    // Calcula distribucion de los contenedores de bancadas
    bancBands(value) {
      const bands = d3
        .scaleBand()
        .domain(this.bancadas)
        .range([0, this.width])
        .paddingInner(0.05)
        .paddingOuter(0.02);
      this.espacios = bands.bandwidth();
      return bands(value);
    },
    num_bands(value) {
      const bands = d3
        .scaleBand()
        .domain([0, 1, 2, 3])
        .range([0, this.width])
        .paddingInner(0.05)
        .paddingOuter(0.02);
      this.espacios = bands.bandwidth();
      return bands(value);
    },

    bancColors(values, i) {
      const col = d3
        .scaleOrdinal()
        .domain(this.bancadas)
        .range(colors);
      console.log(this.bancadas);
      return col(values, i);
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
  fill: rgb(226, 226, 226);
  stroke: #8b8a8a;
  stroke-width: 1px;
}

.marcador {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.text_svg {
  font-size: 22px;
  font-weight: 600;
}
.textCount_svg {
  font-size: 55px;
  font-weight: 600;
}
</style>