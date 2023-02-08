// Assignment code here
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
let special = "!@#$%^*(){}[]:;'";
let includeLower = false;
let includeUpper = false;
let includeNumber = false;
let includeSpecial = false;
let passwordLength = 0;



function generatePassword() {
  let validCharacters = "";
  console.log("I am here");
  passwordLength = prompt("enter password length between 8 and 128");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password length must be between 8 and 128 please re-try");
    generatePassword();
  }
  includeLower = confirm("okay to include lower case characters in password");
  if (includeLower) {
    validCharacters += lower;
  }
  console.log("valid characters = ", validCharacters);
  
  includeUpper = confirm("okay to include Upper case characters in password");
  if (includeUpper) {
    validCharacters += upper;
  }
  console.log("valid characters = ", validCharacters) 
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Generator function 
function getRandomlower() {
  return String.fromCharCode();
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random))
}


console.log(Math.floor(Math.random()))