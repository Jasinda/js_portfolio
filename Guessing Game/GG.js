var secretNumber = Math.floor(Math.random() * 10) + 1;
var result = document.getElementById("result");
var mybutton = document.getElementById("Guess");
mybutton.addEventListener("click", guessNumber);

function guessNumber() {
  var guess = document.getElementById("textbox").value;
  var convertedGuess = Number(guess);
  checkanswer(convertedGuess);
}

function checkanswer(answer) {
  if (answer === secretNumber) {
    result.innerHTML = "Correct";
    clearInput();
  } else if (answer < secretNumber) {
    result.innerHTML = "Incorrect , guess too low";
    clearInput();
  } else if (answer > secretNumber) {
    result.innerHtml = "Incorrect , guess to High";
    clearInput();
  } else {
    result.innerHTML = "Invalid Input";
    clearInput();
  }
}
function clearInput(result) {
  document.getElementById("textbox").value = "";
}
