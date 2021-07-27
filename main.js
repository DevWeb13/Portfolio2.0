const status = document.getElementById("status");

let statusText = [
  "developpeur front-end",
  "creation de site vitrine",
  "devis personnalise",
];

let wordIndex = 0;
let letterIndex = 0;

function createLetters() {
  // Créer un element span
  const letter = document.createElement("span");
  // Rendre ce span enfant de target
  status.appendChild(letter);
  // Injecter la lettre dans letter
  letter.textContent = statusText[wordIndex][letterIndex];
  // Supprimer les lettres au bout de 2.8s
  setTimeout(() => {
    letter.remove();
  }, 5000);
}

setTimeout(() => {
  const loop = () => {
    setTimeout(() => {
      if (wordIndex < statusText.length) {
        // Si il reste encore des lettres dans le mot
        if (letterIndex < statusText[wordIndex].length) {
          createLetters();
          letterIndex++;
          loop();
          // Sinon il n'y a plus de lettres dans le mot
        } else {
          // Attendre que les lettres se soit supprimées pour passer au mot suivant
          setTimeout(() => {
            wordIndex++;
            letterIndex = 0;
            loop();
          }, 5000);
        }
        // sinon plus de mots dans le tableau
      } else {
        // repartir du debut du tableau
        wordIndex = 0;
        loop();
      }
    }, 100);
  };
  loop();
}, 5000);

// const soundCoin = new Audio("./sound/Collect_Point_01.mp3");
// const soundCoin = () => {
//   const audio = new Audio();
//   audio.src = "./sound/Collect_Point_01.mp3";
//   audio.play();
// };

// window.addEventListener("load", () => {
//   soundCoin.play();
// });
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     status.style.opacity = 1;
//     soundCoin();
//   }, 4500);
// });
