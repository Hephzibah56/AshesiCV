/* This function stores the unique elements with ID into variables
 which are equated to the innerHTML
*/
function getUserData(){
  let First   = localStorage.getItem("first_name");
  let MiddleN = localStorage.getItem("middle_name");
  let LastN   = localStorage.getItem("last_name");
  let Email   = localStorage.getItem("email");
  let PhoneN  = localStorage.getItem("phone_num");
  let Address = localStorage.getItem("address");
  let Gender  = localStorage.getItem("gender");
  console.log(First, MiddleN, LastN, Email, PhoneN, Address, Gender);

  document.getElementById("name").innerHTML = `${First} ${MiddleN} ${LastN}`;
  document.getElementById("address").innerHTML = Address;
  document.getElementById("number").innerHTML = PhoneN;
  document.getElementById("email").innerHTML = Email;
} 

getUserData();