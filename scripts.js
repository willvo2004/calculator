const numBtn = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear-btn");
const operBtn = document.querySelectorAll(".right-column");

let inFixStack = [];
let postFixStack = [];

operBtn.forEach(operation => {
    operation.addEventListener("click", () => {
        inFixStack.push(display.textContent);
        switch(operation.textContent) {
            case "÷":
                inFixStack.push("÷");
                break;

            case "x":
                inFixStack.push("x");
                break;

            case "−":
                inFixStack.push("−");
                break;

            case "+":
                inFixStack.push("+");
                break;
            
            case "=":
                // function call
        }
        display.setAttribute("value", "0");
    })
})

numBtn.forEach(number => {
    number.addEventListener("click", () => {
        if (display.textContent == 0) {
            display.textContent = number.textContent;
        }
        else if (display.getAttribute("value") == 0) {
            display.textContent = number.textContent;
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


// function solve() {}
