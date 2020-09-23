/* This file validates the users input on the form inn the firstNameValidate function, and stores 
the information into a localStorage object*/

const introElement = document.getElementById("form-intro");
introElement.innerHTML = `<h1>PERSONAL DETAILS</h1>`;
const form = document.getElementById("addUserDetails");

//performing validation of users's input
function firstNameValidate(event) {
  event.preventDefault();

  const firstN = document.getElementById("first_name").value;
  const midName = document.getElementById("middle_name").value;
  const lastN = document.getElementById("last_name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phoneN = document.getElementById("phone_num").value;
  const gender = document.getElementById("gender");

  if (!firstN) {
    window.alert("First Name Empty");
    document.getElementById("fname_error").innerText =
      "First Name must not be empty";
  }
  if (!midName) {
    window.alert("Middle Name Empty");
    document.getElementById("midname_error").innerHTML =
      "Middle Name must not be empty";
  }
  if (!lastN) {
    window.alert("Last Name Empty");
    document.getElementById("lname_error").innerHTML =
      "Last Name must not be empty";
  }
  if (!address) {
    window.alert("Address Empty");
    document.getElementById("address_error").innerHTML =
      "Address must not be empty";
  }
  if (!email) {
    window.alert("Email Empty");
    document.getElementById("email_error").innerHTML =
      "Emails must not be empty";
  }
  if (!phoneN) {
    window.alert("Phone number Empty");
    document.getElementById("phone_error").innerHTML = "Enter only numbers";
  }
  if (!gender) {
    window.alert("Gender field Empty");
    document.getElementById("gender_error").innerHTML = "Select your gender";
  }

  //storing data using the localStorage object
  localStorage.setItem("first_name", firstN);
  localStorage.setItem("middle_name", midName);
  localStorage.setItem("last_name", lastN);
  localStorage.setItem("email", email);
  localStorage.setItem("address", address);
  localStorage.setItem("gender", gender);
  localStorage.setItem("phone_num", phoneN);

  //links to the CV.html 
  const currentLocation = window.location.href;
  window.location.href = `${currentLocation.split("/index")[0]}/CV.html`;
}

form.addEventListener("submit", firstNameValidate);

