<template>
  <div>
    <div class="step" :name="[i]" v-for="(obj,i) in stepsText" :key="i">
      <p>{{obj.step}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "scroll_text",
  props: ["stepsText"]
};
</script>

<style scoped>
.step {
  padding: 15vh 0;
  margin-top: 2em;
  background: rgba(255, 255, 255, 0.39);
  width: 50vw;
  display: flex;
  border: 1px solid blue;
  border-radius: 14px;
}

.step > p {
  font-family: "Barlow";
  font-weight: 400;
  font-size: 20px;
  margin: 10px;
}
</style>