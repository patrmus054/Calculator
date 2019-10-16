const eqation = document.querySelector('.equation');
const buttons = document.querySelector('.container')


function add(a,  b){  return a+b;};
function sub(a,  b){  return a-b;};
function div(a,  b){  return a/b;};
function multi(a,  b){  return a*b;};

let firstNumber = '';
let secondNumber = '';
let first = true;
let mark = '';

function reset(){
    firstNumber = '';
    secondNumber = '';
    first = true;
    mark = '';
}

buttons.addEventListener('click', function(event) {

    if(event.target.innerText == '='){
        switch(mark){
            case '÷':
                eqation.innerText = div(parseInt(firstNumber), parseInt(secondNumber));
                break;
            case '-':
                eqation.innerText = sub(parseInt(firstNumber), parseInt(secondNumber));
                break;
            case '+':
                eqation.innerText = add(parseInt(firstNumber), parseInt(secondNumber));
                break;
            case '×':
                eqation.innerText = multi(parseInt(firstNumber), parseInt(secondNumber));
                //console.log(multi(parseInt(firstNumber), parseInt(secondNumber)));
                break;
            default:
                eqation.innerText = "Nieprawidłowo zrobione diałanie";
        }
        reset();
    }

    if(isNaN(parseInt(event.target.innerText))){
        switch(event.target.innerText){
            case '÷':
                mark = '÷';
                eqation.innerText = '÷';
                first = false;
                break;
            case '-':
                mark = '-';
                eqation.innerText = '-';
                first = false;
                break;
            case '+':
                mark = '+';
                eqation.innerText = '+';
                first = false;
                break;
            case '×':
                mark = '×';
                eqation.innerText = '×';
                first = false;
                break;
        }
    }else if(first){
        firstNumber += event.target.innerText
        eqation.innerText = firstNumber;
    }else{
        secondNumber += event.target.innerText
        eqation.innerText = secondNumber;
    }
  });

