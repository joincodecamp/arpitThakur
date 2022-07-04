// var firstName = document.getElementById("fname").value;
var contacts = [];
function submitForm(){
  validation ();

 let fname = document.getElementById("fname").value;
 let email = document.getElementById("email").value;
 let phNumber= document.getElementById("phNumber").value;
 
  var obj = {};
  obj["fname"] = fname;
  obj["email"] = email;
  obj["phNumber"] = phNumber;
  
 
  contacts.push(obj);
  
  

    let table = document.getElementById("table");
    table.innerHTML = '';
  
  for (let i = 0; i < contacts.length; i++) {
 
      
      let row = table.insertRow();
      let td1 = row.insertCell(0);
      let td2 = row.insertCell(1);
      let td3 = row.insertCell(2);
 
      td1.innerHTML = contacts[i].fname;
      td2.innerHTML = contacts[i].email;
      td3.innerHTML = contacts[i].phNumber;
  }


     
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phNumber").value = "";
 


  return false;
}


function validation(){
  let fname = document.getElementById("fname").value;
 let email = document.getElementById("email").value;
 let phNumber= document.getElementById("phNumber").value;


 if(fname == "" ){
   
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

}