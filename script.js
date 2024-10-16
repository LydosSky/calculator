// Buttons and display
const displayNumbers = [];
const displayOperators = [];
const diplayHist = [];

function numpadClick(number) {
  if (number === null) display.value = null;
  else display.value += number;
}

const display = document.querySelector(".display");
const allbuttons = document.querySelectorAll(" .num-btn");

for (let button of allbuttons) {
  button.addEventListener("click", function () {
    if (
      button.classList.contains("clear") ||
      button.classList.contains("equal")
    )
      numpadClick(null);
    else numpadClick(button.textContent);
  });
}

function operators(operation) {
  const add = function (a, b) {
    return a + b;
  };

  const substract = function (a, b) {
    return a - b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const divide = function (a, b) {
    return a / b;
  };

  return operation === add.name
    ? add
    : operation === substract.name
      ? substract
      : operation === multiply.name
        ? multiply
        : operation === divide.name
          ? divide
          : "OOPS";
}
