<template>
  <p>{{ msg }}</p>
  <div class="container">
    <div class="inner">
      <div class="game day"></div>
      <div class="fox hidden"></div>
      <div class="poop-bag hidden"></div>
      <div class="foreground-rain"></div>
      <div class="frame"></div>
      <div class="modal">
        <div class="modal-inner">Press the middle button to start</div>
      </div>
      <div class="buttons">
        <div class="btn left-btn"></div>
        <div class="btn middle-btn"></div>
        <div class="btn right-btn"></div>
      </div>
      <div class="icons">
        <div class="icon highlighted fish-icon"></div>
        <div class="icon poop-icon"></div>
        <div class="icon weather-icon"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { init } from '../init.ts';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {

    };
  },
  mounted() {
    init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/sprites.css");
@import url("../assets/style.css");
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
