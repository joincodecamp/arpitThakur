let firstValue;
let secondValue;
let operator;



function addValue(input){
  
  document.getElementById("calc-screen").value += input;

  
}
function handleOperatorClick(op){
  if (!operator) {
    firstValue = document.getElementById("calc-screen").value;
    document.getElementById("calc-screen").value = "";
    operator=op;
  }
}

function clearV() {
  document.getElementById("calc-screen").value = "";
}
function getValue(){
  let result;
  const secondValue = document.getElementById("calc-screen").value;
  if(operator == '+'){
    result =  parseFloat(firstValue) + parseFloat(secondValue);
  }
  else if(operator == '-'){
    result = parseFloat(firstValue) - parseFloat(secondValue);
  }
  else if (operator == '*'){
    
    result = parseFloat(firstValue) * parseFloat(secondValue);
  }
  else if (operator == '/'){
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }
  
  
  operator = "";
  document.getElementById("calc-screen").value = result;


}