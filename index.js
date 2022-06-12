function getRandomNumber() {
  let randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

function play() {
  let RandomNumber1 = getRandomNumber();
  let RandomNumber2 = getRandomNumber();

  document
    .querySelector("img.img1")
    .setAttribute("src", "images/dice" + RandomNumber1 + ".png");
  document
    .querySelector("img.img2")
    .setAttribute("src", "images/dice" + RandomNumber2 + ".png");

  function getResult() {
    let result = "";
    if (RandomNumber1 === RandomNumber2) {
      result = "Draw!";
    } else if (RandomNumber1 > RandomNumber2) {
      result = "🚩 Player 1 Wins!";
    } else {
      result = "Player 2 Wins! 🚩";
    }
    return result;
  }

  document.querySelector("h1").classList.add("result");
  document.querySelector("h1.result").textContent = getResult();
}
