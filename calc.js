let result="";
let firstNum="";
let secondNum="";
let screen=document.querySelector(".screen");
let btnBoard=document.querySelector(".calc");
let lastOperator="";


btnBoard.addEventListener("click", function(event) {
        if (isNaN(parseInt(event.target.innerText))) {
            processOperator(event.target.innerText);
        }

        else {
            processNumber(event.target.innerText)
        }
    }

);

function processNumber(value) {
    screen.innerText="";
    result+=value;
    screen.innerText=result;
}



function processOperator(value) {
    switch (value) {

        case ".": 
        if (['÷', '×', '+', '–'].includes(result[result.length - 1]) || screen.innerText=="0") {
            screen.innerText="";
            result+="0"+value;
            screen.innerText=result;
        }

        else {
            screen.innerText="";
            result+=value;
            screen.innerText=result;
        }

        break;

        case "C": 
        screen.innerText="0";
        result="";
        break;

        case "←": 
        if (result.length==1) {
            screen.innerText="0";
            lastOperator="";
            result="";
        }

        else if (screen.innerText=="0") {
            return;
        }

        else if (['÷', '×', '+', '–'].includes(result[result.length - 1])) {
            screen.innerText=result=result.substring(0, result.length - 1);
            lastOperator="";
        }

        else {
            screen.innerText=result=result.substring(0, result.length - 1);
        }

        break;

        case "÷" : 
        case "×" : 
        case "–" : 
        case "+" : 
        firstNum=result;
        lastOperator=value;
        result+=value;
        screen.innerText=result;
        break;

        case "𑁓": 
        operation() 
        break;
    }
}



function operation() {
    secondNum=result.substring(result.indexOf(lastOperator) + 1, result.length);

    switch (lastOperator) {
        case "+":
            result=parseFloat(firstNum) + parseFloat(secondNum);
        screen.innerText=result=result.toFixed(3).toString();
        break;
        case "×":
            result=parseFloat(firstNum) * parseFloat(secondNum);
        screen.innerText=result=result.toFixed(3).toString();
        break;
        case "–":
            result=parseFloat(firstNum) - parseFloat(secondNum);
        screen.innerText=result=result.toFixed(3).toString();
        break;
        case "÷":
            result=parseFloat(firstNum) / parseFloat(secondNum);
        screen.innerText=result=result.toFixed(3).toString();
        break;
    }

}