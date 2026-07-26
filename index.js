// Calculator Program

// State Variables
let currentInput = "";
let previousInput = null;
let operator = null;
let result = null;

// DOM Elements
const display = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equalsBtn");
const clearBtn = document.getElementById("clearBtn");

// Event listeners
numberBtns.forEach((btn) => {
  return btn.addEventListener("click", handleNumberClick);
});

operatorBtns.forEach((btn) => {
  return btn.addEventListener("click", handleOperatorClick);
});

equalsBtn.addEventListener("click", handleEqualsClick);

clearBtn.addEventListener("click", handleClearClick);

// Functions for Logic

function handleNumberClick(event) {
  const clickedValue = event.target.textContent;

  if (clickedValue === "." && currentInput.includes(".")) {
    return;
  }
  currentInput = currentInput + clickedValue;
  display.textContent = currentInput;
}

function handleOperatorClick(event) {
  const clickedOperator = event.target.textContent;

  if (currentInput === "") {
    return;
  }
  if (previousInput !== null && operator !== null) {
    calculateResult();
    currentInput = result;
  }

  previousInput = currentInput;
  operator = clickedOperator;
  currentInput = "";
}

function handleEqualsClick() {
  if (previousInput === null || currentInput === "" || operator === null) {
    return;
  }
  calculateResult();

 if (typeof result !== "string"){
  result = result.toFixed(1);
 }

 display.textContent = result;

  previousInput = null;
  currentInput = result;
  operator = null;
}

function handleClearClick() {
  currentInput = "";
  previousInput = null;
  operator = null;
  display.textContent = "0";
}

// Core Math Function
function calculateResult() {
  let num1 = Number(previousInput);
  let num2 = Number(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Divide by 0";
      } else {
        result = num1 / num2;
      }
      break;

      return result;
  }
}
