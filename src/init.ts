import gameState, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

let nextTimeToTick = Date.now();

const init = async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  // let nextTimeToTick = Date.now();

  function nextAnimationFrame(): void {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

// function nextAnimationFrame(): void {
//   const now = Date.now();

//   if (nextTimeToTick <= now) {
//     gameState.tick();
//     nextTimeToTick = now + TICK_RATE;
//   }
//   requestAnimationFrame(nextAnimationFrame);
// }

export default {
  init
}
