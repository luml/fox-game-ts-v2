export const modFox = function modFox(state: String) {
  (document.querySelector(".fox") as Element).className = `fox fox-${state}`;
};

export const modScene = function (state: String) {
  (document.querySelector(".game") as Element).className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show: Boolean) {
  (document.querySelector(".poop-bag") as Element).classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  (document.querySelector(".modal") as Element).innerHTML = `<div class="modal-inner">${text}</div>`;
};
