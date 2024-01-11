const numBtn = document.querySelectorAll(".num");
const operBtn = document.querySelectorAll(".right-column");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const eqaulsBtn = document.querySelector("#equals-btn");
let performingArithmatic = false;
let numbersToBeEvaluated = [];
let operationToBePerformed = [];

numBtn.forEach(number => {
    number.addEventListener("click", () => {
        if (display.textContent == 0 || performingArithmatic) {
            display.textContent = number.textContent;
            performingArithmatic = false;
        }
        else {
            display.textContent = display.textContent + number.textContent;
        }
    })
})

operBtn.forEach(operation => {
    operation.addEventListener("click", () => {
        performingArithmatic = true;
        numbersToBeEvaluated.push(parseFloat(display.textContent)); // at the step where the array has 2 elements, the calculated value must be displayed
        operationToBePerformed.push(operation.textContent); // there will be 2 numbers as such : a + b +
        if (numbersToBeEvaluated.length == 2) {
            display.textContent = calculate(numbersToBeEvaluated, operationToBePerformed); // use pop for operands, use shift for operators
            numbersToBeEvaluated.push(parseFloat(display.textContent));
        }
    })
})

eqaulsBtn.addEventListener("click", () => {
    numbersToBeEvaluated.push(parseFloat(display.textContent));
})

function calculate(operands, operator) {
    const operation = operator.shift();
    const secondValue = operands.pop();
    const firstValue = operands.pop(); // − ÷ + x (also leaves the operands array empty)

    switch (operation) {
        case "÷":
            return firstValue / secondValue;
        case "x":
            return firstValue * secondValue;
        case "−":
            return firstValue - secondValue;
        case "+":
            return firstValue + secondValue;
    }
}

