// Assignment Code
var generateBtn = document.querySelector("#generate");

// Should I make lists a JS object?
// var charOptions = {}
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "!@#$%&*?-+=";
// ^need to store passwordLength
// (i=0; i>7 && i<129; i++)
// need it to be 8-128 char
// Math.random().toString(128).slice(8)
function generatePassword() {
  var passwordLength = prompt("Please pick a password length between 8-128 characters.");
  // length needs to be 8 or greater, and 128 or less
  while(passwordLength < 8 || passwordLength > 128){
  // if(passwordLength < 8 || passwordLength > 128){
    alert("Please pick a password length between 8 and 128 characters.");
    var passwordLength = prompt("Please pick a password length between 8-128 characters.");
  // }else if(passwordLength > 7 && passwordLength < 129){
  //    alert("Thank you."); 
  //   }
   }
   while(passwordLength > 7 && passwordLength < 129){
    alert("Thank you."); 
    break
   }
   var lowerCaseConfirm = confirm("Do you want your password to contain lowercase characters?")
   if(lowerCaseConfirm === true){
     alert("Got it, your password will contain lowers case characters!");
   }else{
     alert("No lowercase characters will be used.");
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
