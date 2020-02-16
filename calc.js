
let result = "";
let firstNum = "";
let secondNum = "";
let screen = document.querySelector(".screen");
let btnBoard = document.querySelector(".calc");
let lastOperator = "";
let key = "";

// js codes for keyboard number keys
document.onkeydown = function (event) {
    key = event.key;


    switch (key) {

        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            processNumber(key);
            break;

        case "Enter":
            event.preventDefault();
            operation()
            break;

        case "/":
        case "*":
        case "-":
        case "+":
            operator(key);
            break;

        case "Backspace":
            remove();
            break;

        case ".":
            dot(key);
            break;

    }

};


btnBoard.addEventListener("click", function (event) {
        if (isNaN(parseInt(event.target.innerText))) {
            processOperator(event.target.innerText);
        } else {
            processNumber(event.target.innerText)
        }
    }

);


function processNumber(value) {
    screen.innerText = "";
    result += value;
    screen.innerText = result;
};


function processOperator(value) {
    switch (value) {

        case ".":
            dot(value);
            break;

        case "C":
            screen.innerText = "0";
            result = "";
            break;

        case "←":
            remove();
            break;

        case "÷":
        case "×":
        case "-":
        case "+":
            operator(value);
            break;

        case "𑁓":
            operation()
            break;
    }
};


function remove() {
    if (result.length == 1) {
        screen.innerText = "0";
        lastOperator = "";
        result = "";
    } else if (screen.innerText == "0") {
        return;
    } else if (['÷', '×', '+', '-'].includes(result[result.length - 1])) {
        screen.innerText = result = result.substring(0, result.length - 1);
        lastOperator = "";
    } else {
        screen.innerText = result = result.substring(0, result.length - 1);
    }
};


function operator(value) {
    if (screen.innerText == "0") {
        return;
    } else {
        firstNum = result;
        lastOperator = value;
        result += " " + value + " ";
        screen.innerText = result; 
    }
};


function dot(value) {

    if (['÷', '×', '+', '-', '/' ,'*'].includes(result[result.length - 2]) || screen.innerText == "0") {
        screen.innerText = "";
        result += "0" + value;
        screen.innerText = result;
    } else {
        screen.innerText = "";
        result += value;
        screen.innerText = result;
    }

};


function operation() {
    secondNum = result.substring(result.indexOf(lastOperator) + 1, result.length);

    switch (lastOperator) {
        case "+":
            result = parseFloat(firstNum) + parseFloat(secondNum);
            screen.innerText = result = parseFloat(result.toFixed(5)).toString();
            break;
        case "×":
        case "*":
            result = parseFloat(firstNum) * parseFloat(secondNum);
            screen.innerText = result = parseFloat(result.toFixed(5)).toString();
            break;
        case "-":
            result = parseFloat(firstNum) - parseFloat(secondNum);
            screen.innerText = result = parseFloat(result.toFixed(5)).toString();
            break;
        case "÷":
        case "/":
            result = parseFloat(firstNum) / parseFloat(secondNum);
            screen.innerText = result = parseFloat(result.toFixed(5)).toString();
            break;
    }

};