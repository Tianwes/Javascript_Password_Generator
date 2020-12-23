// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "!@#$%&*?-+=";


function generatePassword() {

  var passwordLength = prompt("Please pick a password length between 8-128 characters.")

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid");
    var passwordLength = prompt("Please pick a password length between 8-128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thanks!");
    var lowerCaseConfirm = confirm("Would you like your password to contain lowercase letters?");
  }
  if (lowerCaseConfirm === true) {
    alert("Your password will contain lowercase letters!");
    var upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
  } else if (lowerCaseConfirm === false) {
    alert("Your password will NOT contain lowercase letters!");
    var upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
  }
  if (upperCaseConfirm === true) {
    alert("Your password will contain uppercase letters!");
    var numConfirm = confirm("Would you like your password to contain numbers?");
  } else if (upperCaseConfirm === false) {
    alert("Your password will NOT contain uppercase letters!");
    var numConfirm = confirm("Would you like your password to contain numbers?");
  }
  if (numConfirm === true) {
    alert("Your password will contain numbers!");
    var specialCharConfirm = confirm("Would you like your password to contain special characters?");
  } else if (numConfirm === false) {
    alert("Your password will NOT contain numbers!");
    var specialCharConfirm = confirm("Would you like your password to contain special characters?");
  }
  if (specialCharConfirm === true) {
    alert("Your password will contain special characters!");
  } else if (specialCharConfirm === false) {
    alert("Your password will NOT contain special characters!");
  }
  
  


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
