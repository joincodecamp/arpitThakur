function sum(){
  let a, b, c;
  a = parseFloat(document.getElementById("firstbox").value);
  b = parseFloat(document.getElementById("secondbox").value);
  c = a + b;

  document.getElementById("thirdbox").value = c;
    
  }