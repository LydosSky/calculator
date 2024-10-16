// Buttons and display
const display = document.querySelector(".display");
const allbuttons = document.querySelectorAll(" .num-btn");
let leftNumber,
  rightNumber,
  operator,
  displayValue = "";

function clearCalculation() {
  leftNumber = "";
  rightNumber = "";
  operator = "";
  displayValue = "";
}

function operate(op, leftNum, rightNum) {
  return operators(op)(leftNum, rightNum);
}

function changeDisplay(value) {
  display.value += value;
}

function clearDisplay(value) {
  clearCalculation();
  display.value = null;
}

function numpadClick(number) {
  switch (number) {
    case "clear":
      clearDisplay();
      return;
    case "+":
    case "-":
    case "/":
    case "*":
      operator = number;
      leftNumber = parseInt(displayValue);
      displayValue = "";
      return;
    case "=":
      rightNumber = parseInt(displayValue);
      let result = operate(operator, leftNumber, rightNumber);
      clearDisplay();
      clearCalculation();
      changeDisplay(result);
      displayValue = result;
      return;
    default:
      changeDisplay(number);
      displayValue += number;
      return;
  }
}

for (let button of allbuttons) {
  button.addEventListener("click", function () {
    numpadClick(button.textContent);
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

  return operation === "+"
    ? add
    : operation === "-"
      ? substract
      : operation === "*"
        ? multiply
        : operation === "/"
          ? divide
          : "OOPS";
}
