// Assignment code here
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "1234567890";
let special = "!@#$%^*(){}[]:;'";
let validCharacters ;
  let includeLower ;
  let includeUpper ;
  let includeNumber ;
  let includeSpecial ;
  let passwordLength ;



function generatePassword() {
  validCharacters = "";
   includeLower = false;
   includeUpper = false;
   includeNumber = false;
   includeSpecial = false;
   passwordLength = 0;
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

  includeNumber = confirm("okay to include number case characters in password");
  if (includeNumber) {
    validCharacters += number;
  }
  console.log("valid characters = ", validCharacters)


  includeSpecial = confirm("okay to include special case characters in password");
  if (includeSpecial) {
    validCharacters += special;
  }
  console.log("valid characters = ", validCharacters)

  if (includeLower === false &&
    includeUpper === false &&
    includeNumber === false &&
    includeSpecial === false) {
    alert("at least one character type should be slected");
    generatePassword();
  }
  let randomPassword = "";
  let randomIndex = 0;
  let randomChar = "A";
  for (let i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * validCharacters.length);
    randomChar = validCharacters[randomIndex];
    randomPassword += randomChar;
  }
  console.log("random password = ", randomPassword);
  return randomPassword;
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