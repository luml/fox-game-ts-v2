<template>
  <p>FOX GAME v2.0</p>
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
import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

export default {
  name: 'App',
  data () {
    return {
      nextTimeToTick: Date
    }
  },
  created() {
    this.nextTimeToTick = Date.now()
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      console.log("starting game");
      initButtons(handleUserAction);
      requestAnimationFrame(this.nextAnimationFrame);
    },
    async nextAnimationFrame() {
      const now = Date.now();

      if (this.nextTimeToTick <= now) {
        gameState.tick();
        this.nextTimeToTick = now + TICK_RATE;
      }
      requestAnimationFrame(nextAnimationFrame);
    }
  }
}
</script>

<style>
@import url("./assets/sprites.css");
@import url("./assets/style.css");
</style>
