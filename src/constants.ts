export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.25; // 0.4 is too much rain 
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 50;
export const NIGHT_LENGTH = 5;

export const getNextHungryTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock: number) =>
  Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock: number) =>
  Math.floor(Math.random() * 3) + 4 + clock;
