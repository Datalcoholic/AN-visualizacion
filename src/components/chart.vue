<template>
  <div class="chart-container">
    <svg class="graph-container" :width="width" :height="height">
      <g class="bancadas_containers">
        <transition-group @enter="Enter" @leave="Leave" :css="false" tag="g">
          <rect
            class="back_svg"
            :id="ban.name"
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
            :key="num + 2"
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
const width = 1100;
const fsvg_width = width / 2;

export default {
  name: "chart",
  props: ["bancadas", "bancadasColorScale"],
  data() {
    return {
      width: width,
      height: 800,
      svg_height: null,
      espacios: null,
      newBancadas: [],
      oldBancadas: []
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

  created() {},

  watch: {
    bancadasArray(newVal, oldVal) {
      console.log("new", newVal);
      console.log("old", oldVal);

      this.newBancadas = newVal;
      this.oldBancadas = oldVal;

      // this.$set(this.newBancadas, newVal);
      // this.$set(this.oldBancadas, oldVal);

      //this.svg_width = this.spacios();
      //this.$set(this.bancadasArray, newVal);
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
        .domain(this.bancadasColorScale)
        .range(colors);

      return col(values, i);
    },

    spacios() {
      return (this.width - 50) / this.bancadas.length;
      console.log("spacios", (this.width - 50) / this.bancadas.length);
    },

    //transitions bancadas
    beforeEnter(el) {},
    Enter(el, done) {
      try {
        const tl = new TimelineMax({});
        tl.from(el, 0.7, { transformOrigin: "100% 50%", scaleX: 0 }).fromTo(
          this.$el.querySelector("#Oposicion"),
          0.7,
          { width: this.oldBancadas[0].width },
          { width: this.newBancadas[0].width },
          "=-0.7"
        );

        done();
      } catch (error) {
        console.log(error);
      }

      console.log("element", this.$el.querySelector("#Oposicion"));
    },

    Leave(el, done) {
      const tl = new TimelineMax({});
      tl.to(el, 0.5, { scaleX: 0 })
        .fromTo(
          this.$el.querySelector("#Oposicion"),
          0.5,
          { width: this.oldBancadas[0].width },
          { width: this.newBancadas[0].width },
          "=-0.5"
        )
        .fromTo(
          this.$el.querySelector("#Concertacion"),
          0.5,
          { width: this.oldBancadas[0].width },
          { width: this.newBancadas[0].width },
          "=-0.5"
        )
        .fromTo(
          this.$el.querySelector("#Oficialismo"),
          0.5,
          { width: this.oldBancadas[0].width },
          { width: this.newBancadas[0].width },
          "=-0.5"
        );
      done();
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
  /* background: rgb(232, 232, 233); */
}
/* .bancadas_containers {
  transform: translate(-55px);
} */

.back_svg {
  fill: #f8f8f8;
  stroke: #d8d8d8;
  stroke-width: 1.5px;
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