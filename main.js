const status = document.querySelector("#status");
// const soundCoin = new Audio("./sound/Collect_Point_01.mp3");
const soundCoin = () => {
  const audio = new Audio();
  audio.src = "./sound/Collect_Point_01.mp3";
  audio.play();
};

// window.addEventListener("load", () => {
//   soundCoin.play();
// });
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    status.style.opacity = 1;
    soundCoin();
  }, 4500);
});
