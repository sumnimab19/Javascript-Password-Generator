// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
  var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numChar = [1234567890];
  var specialChar = ["!#$%&'()*+-./:;<=>?@"];
  var randomString="";

  var inputLength = prompt("Enter length of password between 8 - 128 characters.");
  var isInputLower = confirm("Do you want to include Lower Case characters?");
  var isInputUpper = confirm("Do you want to include Upper Case characters?");
  var isInputNumber = confirm("Do you want to include Number?");
  var isInputSpecialChar = confirm("Do you want to include Special Characters?")

  
  if ((isInputLower) && (isInputUpper) && (isInputNumber) && (isInputSpecialChar)) {
    var newString = lowerChar + upperChar + numChar + specialChar; 
    console.log(newString);
  } 

  for (var i = 0; i < inputLength; i++) {
    var newPassword = newString[Math.floor(Math.random() * newString.length)];
    randomString+= newPassword;
  }

  return (randomString);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//gIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
////THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

