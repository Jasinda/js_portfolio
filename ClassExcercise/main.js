var students = ["jasinda", "rion", "rimona", "janet"];
var resultElement = document.getElementById("result");
var mybutton = document.getElementById("Submit");


//mybutton.onclick = checkNames;
mybutton.addEventListener("click", checkNames);

function checkNames() {
  var inputelement = document.getElementById("inputbox").value;

  for (var i = 0; i < students.length; i++) {
    if (students[i] === inputElement.toLowerCase) {
      resultElement.innerHTML = "You are on the list. Welcome!";
      document.getElementById("inputbox").value = "";
      break;
    } else if (students[i] !== inputElement.toLowerCase)
      {resultElement.innerHTML =
        "Sorry, " + inputElement + "!You are not on the list.";
        document.getElementById("inputbox").value = "";
      continue;
    }
  }
}
