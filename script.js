// Buttons and display
const displayNumbers = [];
const displayOperators = [];
const diplayHist = [];

const display = document.querySelector(".display");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const numpadBtns = document.querySelectorAll(".numpad-container .num-btn");

function numpadClick(number) {
  display.value = number;
}

for (let i = 0; i < 10; i++) {
  const currentNumber = i === 9 ? 0 : i + 1;
  numpadBtns[i].addEventListener("click", () => numpadClick(currentNumber));
}

plusBtn.addEventListener("click", () => numpadClick("+"));
minusBtn.addEventListener("click", () => numpadClick("-"));
divideBtn.addEventListener("click", () => numpadClick("/"));
multiplyBtn.addEventListener("click", () => numpadClick("*"));
clearBtn.addEventListener("click", () => numpadClick(null));

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
