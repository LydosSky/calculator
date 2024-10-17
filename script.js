// Buttons and display
const display = document.querySelector(".display");
const allbuttons = document.querySelectorAll(" .num-btn");

// Add Event Listeners To Buttons
for (let button of allbuttons) {
  button.addEventListener("click", function () {
    numpadClick(button.textContent);
  });
}

// Operator functions all bundled
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
////////////////////////////////////////////////////////////////

let leftNumber = "";
let rightNumber = "";
let operator = "";
let displayValue = "";

function clearAll() {
  leftNumber = "";
  rightNumber = "";
  operator = "";
  displayValue = "";
  display.value = "";
}

function operate(op, leftNum, rightNum) {
  leftNum = parseInt(leftNum);
  rightNum = parseInt(rightNum);
  if (rightNum === 0 && op === "/") return "Err";
  return operators(op)(leftNum, rightNum);
}

function changeDisplay(value) {
  display.value = value;
}

function calculateAndDisplay() {
  let result = operate(operator, leftNumber, rightNumber);
  clearAll();
  changeDisplay(result);
  if (result === "Err") return;
  leftNumber = result;
  displayValue = result;
}

function numpadClick(number) {
  switch (number) {
    case "clear":
      clearAll();
      return;
    case "+":
    case "-":
    case "/":
    case "*":
      if (operator !== "" && rightNumber !== "") {
        calculateAndDisplay();
      }
      if (operator === "" && leftNumber === "") leftNumber = displayValue;
      operator = number;
      displayValue = "";
      return;
    case "=":
      calculateAndDisplay();
      return;
    default:
      if (operator !== "") {
        rightNumber += number;
        displayValue += number;
      } else {
        displayValue += number;
      }
      changeDisplay(displayValue);
      return;
  }
}
