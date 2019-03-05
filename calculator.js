let operand1 = 0;
let operand2 = 0;
let op = "";

//Numbers variables

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let n0 = document.getElementById("n0");
//Calculator's display
let result = document.getElementById("result");
result.innerHTML = 0;

//convert strings into numbers
function evil(fn){
    return new Function('return ' + fn)();
}

//Math functions
function add(a,b){
    return a+b;
}
  
function subtract(a,b){
    return a-b;
}
  
function multiply(a,b){
    return a*b;
}
  
function divide(a,b){
    if(a || b == 0){
        return "OPSS";
    }else{
        return a/b;
    }
    return a/b;
}
  //Function which will take an operator and 2 variables to solve
function operate(operator, a, b){
  switch(operator){
    case "+":
      return add(a,b);
      break;
    case "-":
      return subtract(a,b);
      break;
    case "*":
      return multiply(a,b);
      break;
    case "/":
      return divide(a,b);
      break;
    default:
      return "ERROR";
  }
}

//This function will fill the calculator's display whenever a number key has been clicked
function populateDisplay(resu, number){
    if(resu.innerHTML == 0){
        resu.innerHTML = number;
    }else{
        resu.innerHTML += number;
    }
}

//add event to every number button
n1.addEventListener('click', function(){
    populateDisplay(result,1);
});
n2.addEventListener('click', function(){
    populateDisplay(result,2);
});
n3.addEventListener('click', function(){
    populateDisplay(result,3);
});
n4.addEventListener('click', function(){
    populateDisplay(result,4);
});
n5.addEventListener('click', function(){
    populateDisplay(result,5);
});
n6.addEventListener('click', function(){
    populateDisplay(result,6);
});
n7.addEventListener('click', function(){
    populateDisplay(result,7);
});
n8.addEventListener('click', function(){
    populateDisplay(result,8);
});
n9.addEventListener('click', function(){
    populateDisplay(result,9);
});
n0.addEventListener('click', function(){
    populateDisplay(result,0);
});

//this function will return the numbers into the display
function getNumbers(){
    return result.innerHTML;
}

//create variables for the operators buttons
let a = document.querySelector(".a");
let s = document.querySelector(".s");
let m = document.querySelector(".m");
let d = document.querySelector(".d");

//Add event for each operator number to execute the right function

a.addEventListener('click', function(){
    populateDisplay(result, "+");
});
s.addEventListener('click', function(){
    populateDisplay(result, "-");
});
m.addEventListener('click', function(){
    populateDisplay(result, "*");
});
d.addEventListener('click', function(){
    populateDisplay(result, "/");
});

//a function that will clear the display
function clearDisplay(){
    result.innerHTML = 0;
}

//create the clear variable and adding a event
let clear = document.getElementById("clear");
clear.addEventListener('click', () => clearDisplay())

//Now the equal button wich will execute the operation
let equal = document.getElementById('equal');
equal.addEventListener('click', function(){
    let newResult = evil(result.innerHTML);
    result.innerHTML = newResult;
});

//function backspace so the user can undo if they click the wrong number.
function backSpace(resu){
    resu.innerHTML = resu.innerHTML.substring(0,result.innerHTML.length-1);
    if (resu.innerHTML.length == 0) resu.innerHTML = 0;
}

let bS = document.querySelector(".back-space");
bS.addEventListener('click',function(){
    backSpace(result);
});
