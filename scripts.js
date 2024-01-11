const numBtn = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const operBtn = document.querySelectorAll(".right-column");

let outputStack = [];

operBtn.forEach(operation => {
    operation.addEventListener("click", () => {
        const operator = operation.textContent;
        if (outputStack.length == 2) {
           const result = calcResult(outputStack, operator);
           outputStack.length = 0;
           outputStack.push(result);
           display.textContent = outputStack[0];
           display.setAttribute("value", "0");
           return;
        }
        outputStack.push(parseFloat(display.textContent));
        display.textContent = outputStack[0];
        display.setAttribute("value", "0");
    });
})

numBtn.forEach(number => {
    number.addEventListener("click", () => {
        if (display.textContent == 0) {
            display.textContent = number.textContent;
        }
        else if (display.getAttribute("value") == 0) {
            display.textContent = number.textContent;
            outputStack.push(parseFloat(display.textContent));
            display.setAttribute("value", "1");
        }
        else {
            display.textContent = display.textContent + number.textContent;            
        }
    })
});

clearBtn.addEventListener("click", () => {
    if (display.textContent == 0) {
        return;
    }
    display.textContent = 0;
    // clear the stack after
})


function calcResult(numArr, operator) {
    let result = 0;
    switch (operator) {
        case "÷":
            result = numArr.reduce((x,y) => x/y);
            break;
        case "x":
            result = numArr.reduce((x,y) => x * y);
            break;
        case "÷":
            result = numArr.reduce((x,y) => x - y);
            break;
        case "+":
            result = numArr.reduce((x,y) => x + y);    
            break;        
    }
    return result;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}