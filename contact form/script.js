// var firstName = document.getElementById("fname").value;


function submitForm(){
 let firstName = document.getElementById("fname").value;
 let email = document.getElementById("email").value;
 let phNumber= document.getElementById("phNumber").value;


  if(firstName == "" ){
   
    document.getElementById("alert").style.display = 'block';
    return false;
  }
  else{
    document.getElementById("alert").style.display='none';
  } 
  if(email == ""){
    document.getElementById("alert2").style.display = 'block';
    return false;
  }
  else{
    document.getElementById("alert2").style.display='none';
  }
   if(phNumber == ""){
    document.getElementById("alert3").style.display = 'block';
    return false;
  }
  else{
    document.getElementById("alert3").style.display='none';
  }

  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phNumber").value = "";
  return false;
 
}