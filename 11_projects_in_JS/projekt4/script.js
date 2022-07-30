const ballImg = document.querySelector("img");
const askInput = document.querySelector("input");
const pAnswer = document.querySelector(".answer");
const pError = document.querySelector(".error");

const answers = [
  "Tak",
  "Nie",
  "Może",
  "Nie chcesz wiedzieć",
  "Chyba tak",
  "Możliwe",
  "Jak najbardziej",
  "Spróbuj za jakiś czas",
];

// najpierw funkcja która zatrzęsię kulą i
//  musi być funkcja, która sprawdzi czy zawartosć inputa nie jest zakończona pytajnikiem
// jeśli nie jest to error że musi być pytajnik
// jeśli tak to wywołuje funkcję, która
// ma wylosować z tablicy jedną możliwość i wstawi ją do p z odpowiedzią
// !!!! trzeba pamiętać żeby na końcu usunąć klasę shake bo nie zaszejkuje znowu

const shakeBall = () => {
  ballImg.classList.add("shake-animation");
  setTimeout(checkQuestion(), 1000);

  setTimeout(function () {
    ballImg.classList.remove("shake-animation");
  }, 2000);
};

ballImg.addEventListener("click", shakeBall);

const giveAnswer = () => {
  const i = Math.floor(Math.random() * answers.length);
  // pAnswer.textContent = answers[i];
  pAnswer.innerHTML =`<span>Odpowiedź:</span> ${answers[i]}`

  pError.textContent = "";
};

const checkQuestion = () => {
  if (askInput.value == "") {
    pAnswer.textContent = "";
    pError.textContent = "Musisz zadać pytanie!";
  } else if (!askInput.value.endsWith("?")) {
    pAnswer.textContent = "";
    pError.textContent = 'Pytanie musi być zakończone znakiem "?"';
  } else {
    giveAnswer();
  }
};
