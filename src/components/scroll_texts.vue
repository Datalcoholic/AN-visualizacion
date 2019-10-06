<template>
  <div class="steps_container">
    <div class="step" v-for="(obj,i) in stepsText" :key="i">
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
.steps_container {
  margin-top: 0;
  position: absolute;
  display: flex;
  padding: 0 50%;
  flex-direction: column;
  transform: translate(-18%);
  height: 100vh;
}

.step {
  height: 100vh;
  margin-top: 35rem;
  background: rgba(255, 255, 255, 0.39);
  /* padding: 5vh 0; */
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  border-radius: 14px;
}

.step > p {
  margin: 10px;
}
</style>