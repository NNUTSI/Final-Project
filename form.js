"use strict";

export function initializeForm() {
  let form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let errors = {};

    if (fullName === "") {
      errors.fullName = "Please enter your full name.";
    }

    if (email === "") {
      errors.email = "Please enter your email address.";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      event.preventDefault(); // Prevent form submission
      displayErrors(errors);
    }
  });
}

export function isValidEmail(email) {
  // Basic email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function displayErrors(errors) {
  // Display errors to the user (you can customize this according to your needs)
  let errorMessage = "Please fix the following errors:\n";
  for (let error in errors) {
    errorMessage += `- ${errors[error]}\n`;
  }
  alert(errorMessage);
}

// let form = document.getElementById("formelement");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let errors = {};

//   //username
//   let usernameValue = document.getElementById("usernamefiled").value;

//   if (usernameValue == "") {
//     errors.username = "username can not be empty";
//   }
//   if (username.length < 4) {
//     errors.username = "User name must be more than 4 characters";
//   }

//   //password
//   let passwordvalue1 = document.getElementById("passwordfiled").value;
//   let passwordvalue2 = document.getElementById("passwordfiled2").value;

//   if (passwordvalue1 == "") {
//     errors.password = "Passwor can not be empty";
//   }
//   if (passwordvalue1 != passwordvalue2) {
//     errors.password2 = "Password do not match";
//   }

//   //radio
//   let radioElements = this.querySelectorAll('[name="gender"]');
//   console.log(radioElements);
// });
