<template>
  <div class="chart-container">
    <svg class="graph-container" :width="width" :height="height">
      <g class="bancadas_containers">
        <transition-group @enter="Enter" @leave="Leave" :css="false" tag="g">
          <rect
            class="back_svg"
            v-for="(ban) in bancadasArray"
            :key="ban.key"
            :x="ban.x_rect"
            :y="20"
            :width="ban.width"
            :height="ban.height"
            rx="10"
            ry="10"
          />
          <text
            class="text_svg"
            v-for="(ban) in bancadasArray"
            :key="ban.name"
            :x="ban.x_rect"
            :y="[ban.height + 50 ]"
            :fill="ban.fill_text"
          >{{ban.name}}</text>
          <text
            class="textCount_svg"
            v-for="(ban, num) in bancadasArray"
            :key="num + 30"
            :x="[ban.x_rect + 85]"
            :y="[ban.height + 100]"
            :fill="ban.fill_text"
          >{{ban.count}}</text>
        </transition-group>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import { TweenMax, TimeLineMax } from "gsap";

const colors = ["#fb3640", "#772271", "#579633", "#2e86ab"];

export default {
  name: "chart",
  props: ["bancadas"],
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

  computed: {
    banArray() {
      return this.bancadas.map(d => d.name);
    },

    bancadasArray() {
      return this.bancadas.map((d, i) => ({
        name: d.name,
        count: d.count,
        key: `${d.name}_${i}`,
        x_rect: this.bancBands(d.name),
        width: this.spacios(),
        height: this.svg_height,
        fill_rect: "#e2e2e2",
        fill_text: this.bancColors(d.name)
      }));
    },
    banCount() {
      return this.bancadas.map(d => d.count);
    }
  },

  methods: {
    // Calcula distribucion de los contenedores de bancadas
    bancBands(value) {
      const bands = d3
        .scaleBand()
        .domain(this.banArray)
        .range([0, this.width])
        .paddingInner(0.05)
        .paddingOuter(0.02);

      this.espacios = bands.bandwidth();

      return bands(value);
    },

    bancColors(values, i) {
      const col = d3
        .scaleOrdinal()
        .domain(this.banArray)
        .range(colors);

      return col(values, i);
    },

    spacios() {
      return (this.width - 50) / this.bancadas.length;
    },

    //transitions bancadas
    beforeEnter(el) {
      TweenMax.set(el);
    },
    Enter(el) {
      console.log("el", el);

      //TweenMax.from(["#"], 2, { transformOrigin: "right", width: 20 });
      TweenMax.from(el, 2, { transformOrigin: "right", width: 20 });
    },
    Leave(el, done) {
      TweenMax.to(el, 0.5, { transformOrigin: "left", width: 0 });
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
  fill: #e2e2e2;
  stroke: #8b8a8a;
  stroke-width: 1px;
}

.marcador {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.text_svg {
  font-size: 25px;
  font-weight: 600;
}
.textCount_svg {
  font-size: 55px;
  font-weight: 600;
}

.test-enter-active {
  transition: opacity 10s;
}

.test-enter {
  opacity: 0;
}
</style>