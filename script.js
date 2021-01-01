// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "?", "-", "+", "=", ".", "/", ":", ";", "<", ">", "[", "]", "^", "_", "{", "}", "~"];


var confirmedArrs = [];
var results = [];

function generatePassword() {

  // Stores user's preferred password length
  var passwordLength = prompt("Please pick a password length between 8-128 characters.");

  // While user's preferred password length is not valid
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid: Your password should be 8-128 characters.");
    var passwordLength = prompt("Please pick a password length between 8-128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
  }
  // if user's preferred password length is valid
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thanks!");
    var lowerCaseConfirm = confirm("Would you like your password to contain lowercase letters?");
  }
  if (lowerCaseConfirm === true) {
    alert("Your password will contain lowercase letters!");
    confirmedArrs = confirmedArrs.concat(lowerCase);
    // console.log(confirmedArrs);
    var upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
  } else if (lowerCaseConfirm === false) {
    alert("Your password will NOT contain lowercase letters!");
    var upperCaseConfirm = confirm("Would you like your password to contain uppercase letters?");
  }
  if (upperCaseConfirm === true) {
    alert("Your password will contain uppercase letters!");
    confirmedArrs = confirmedArrs.concat(upperCase);
    // console.log(confirmedArrs);
    var numConfirm = confirm("Would you like your password to contain numbers?");
  } else if (upperCaseConfirm === false) {
    alert("Your password will NOT contain uppercase letters!");
    var numConfirm = confirm("Would you like your password to contain numbers?");
  }
  if (numConfirm === true) {
    alert("Your password will contain numbers!");
    confirmedArrs = confirmedArrs.concat(num);
    // console.log(confirmedArrs);
    var specialCharConfirm = confirm("Would you like your password to contain special characters?");
  } else if (numConfirm === false) {
    alert("Your password will NOT contain numbers!");
    var specialCharConfirm = confirm("Would you like your password to contain special characters?");
  }
  if (specialCharConfirm === true) {
    alert("Your password will contain special characters!");
    confirmedArrs = confirmedArrs.concat(specialChar);
    // console.log(confirmedArrs);
  } else if (specialCharConfirm === false) {
    alert("Your password will NOT contain special characters!");
  }
  // if all confirms are answered negative
  if (lowerCaseConfirm === false && upperCaseConfirm === false && numConfirm === false && specialCharConfirm === false) {
    alert("Please select at least one character type for your password.");
    return;
  }
  else {
    alert("Here's your password!");
  }

  // pull random characters from confirmed arrays
  for (var i = 0; i < passwordLength; i++) {
    var randomizedArr = confirmedArrs[Math.floor(Math.random() * confirmedArrs.length)];
    // console.log(randomizedArr);
    results.push(randomizedArr);
    console.log(results);

  }

  // removes commas from randomized array
  return results.join('');

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
