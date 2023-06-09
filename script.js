const operatorBtns = document.querySelectorAll(".operatorKey");
const numberBtns = document.querySelectorAll(".numberKey");
const allClear = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#backspace");
const decimal = document.querySelector("#point");
const equals = document.querySelector("#equals");
const githubLogo = document.querySelector(".special-btns");

const output = document.querySelector(".output");

function appendNumber(number) {
  output.innerHTML += number;
}

function appendOperator(operator) {
  output.innerHTML += operator;
}

function appendDecimal(decimal) {
  output.innerHTML += decimal;
  
}

function clearOutput() {
  output.innerHTML = "";
}

function deleteLastCharacter() {
  output.innerHTML = output.innerHTML.slice(0, -1);
}

function openGitHub() {
    window.open("https://github.com/jfmartinz", "_blank");
  }

  function calculate() {
    const expression = output.innerHTML.trim();
    const operator = getOperator(expression);
    const operands = expression.split(operator);
  
    if (operands.length === 2) {
      const operand1 = parseFloat(operands[0]);
      const operand2 = parseFloat(operands[1]);
  
      if (!isNaN(operand1) && !isNaN(operand2)) {
        let result;
        switch (operator) {
          case '+':
            result = add(operand1, operand2);
            break;
          case '-':
            result = subtract(operand1, operand2);
            break;
          case '*':
            result = multiply(operand1, operand2);
            break;
          case '/':
            result = divide(operand1, operand2);
            break;
          default:
            return;
        }
  
        output.innerHTML = result;
      }
    }
  }

function getOperator(expression) {
    switch (true) {
      case expression.includes('+'):
        return '+';
      case expression.includes('-'):
        return '-';
      case expression.includes('*'):
        return '*';
      case expression.includes('/'):
        return '/';
      default:
        return '';
    }
  }

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    return;
  }
  return operand1 / operand2;
}





// Event Listeners
allClear.addEventListener("click", clearOutput);
deleteBtn.addEventListener("click", deleteLastCharacter);
equals.addEventListener("click", calculate);
githubLogo.addEventListener("click",openGitHub);