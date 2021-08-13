import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

let nextTimeToTick = Date.now();

export const init = async function init() {
  console.log("starting game");
  initButtons(handleUserAction);
  requestAnimationFrame(nextAnimationFrame);
}

export const nextAnimationFrame = async function nextAnimationFrame() {
  const now = Date.now();

  if (nextTimeToTick <= now) {
    gameState.tick();
    nextTimeToTick = now + TICK_RATE;
  }
  requestAnimationFrame(nextAnimationFrame);
}