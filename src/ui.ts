export const modFox = function modFox(state: string) {
  (document.querySelector(".fox") as Element).className = `fox fox-${state}`;
};

export const modScene = function (state: string) {
  (document.querySelector(".game") as Element).className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show: boolean) {
  (document.querySelector(".poop-bag") as Element).classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  (document.querySelector(".modal") as Element).innerHTML = `<div class="modal-inner">${text}</div>`;
};
