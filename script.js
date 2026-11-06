let calculatorResult = "";
let storedCalculatorResult = "";
let storedExpression = "";

let firstVal = 0;
let secondVal = 0;
let finalVal = 0;


let output = document.querySelector('.resultContainer');

//numbers
const button1 = document.querySelector('.no1');
const button2 = document.querySelector('.no2');
const button3 = document.querySelector('.no3');
const button4 = document.querySelector('.no4');
const button5 = document.querySelector('.no5');
const button6 = document.querySelector('.no6');
const button7 = document.querySelector('.no7');
const button8 = document.querySelector('.no8');
const button9 = document.querySelector('.no9');
const button0 = document.querySelector('.no0');

button1.addEventListener('click', calculateSomething);
button2.addEventListener('click', calculateSomething);
button3.addEventListener('click', calculateSomething);
button4.addEventListener('click', calculateSomething);
button5.addEventListener('click', calculateSomething);
button6.addEventListener('click', calculateSomething);
button7.addEventListener('click', calculateSomething);
button8.addEventListener('click', calculateSomething);
button9.addEventListener('click', calculateSomething);
button0.addEventListener('click', calculateSomething);

//clear and back

const buttonClear = document.querySelector('.C');
const buttonBack = document.querySelector('.back')

buttonClear.addEventListener('click', clearAll);
buttonBack.addEventListener('click', backOut);

function clearAll() {
    calculatorResult = ""
    output.innerText = "cleared"
}

function backOut() {

    calculatorResult = calculatorResult.slice(0,-1)
    output.innerText = calculatorResult  
}

//operations
const buttonPlus = document.querySelector('.plus');
const buttonMulti = document.querySelector('.multi');
const buttonDiv = document.querySelector('.div');
const buttonSub = document.querySelector('.sub');

buttonPlus.addEventListener('click', operatorClicked);
buttonMulti.addEventListener('click', operatorClicked);
buttonDiv.addEventListener('click', operatorClicked);
buttonSub.addEventListener('click', operatorClicked);

function operatorClicked(){
    if (calculatorResult != ""){
        storedCalculatorResult = calculatorResult
    }
    storedExpression = event.target.innerText
    calculatorResult = ""
    output.innerText = event.target.innerText
}

//equal

const buttonEqual = document.querySelector('.equal')
buttonEqual.addEventListener('click', equalized);

//functions for calculating
function calculateSomething() {

    calculatorResult += event.target.innerText
    output.innerText = calculatorResult  

}

function equalized() {

    firstVal = +storedCalculatorResult;
    secondVal = +calculatorResult;
    
    if (storedExpression == "÷"){
        finalVal = firstVal/secondVal
    } 
    else if (storedExpression == "x"){
        finalVal = firstVal*secondVal
    }
    else if (storedExpression == "+"){
        finalVal = firstVal+secondVal
    }
    else if (storedExpression == "-"){
        finalVal = firstVal-secondVal
    }

    calculatorResult = ""
    storedCalculatorResult = ""
    output.innerText = finalVal

    
}

