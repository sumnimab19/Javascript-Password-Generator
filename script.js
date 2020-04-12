// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var inputLength = prompt("Enter length of password between 8 - 128 characters.");
  var isInputLower = confirm("Do you want to include Lower Case characters?");
  var isInputUpper = confirm("Do you want to include Upper Case characters?");
  var isInputNumber = confirm("Do you want to include Number?");
  var isInputSpecialChar = confirm("Do you want to include Special Characters?")

  if (isInputLower){
    var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var inputLower = lowerChar[Math.floor(Math.random() * lowerChar.length)];
    console.log(inputLower);
  } 
  if (isInputUpper) {
    var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var inputUpper = upperChar[Math.floor(Math.random() * upperChar.length)];
    console.log(inputUpper);
  }
  if (isInputNumber) {
    var numChar = [0,1,2,3,4,5,6,7,8,9];
    var inputNumber = numChar[Math.floor(Math.random() * numChar.length)];
    console.log(inputNumber);
  }
  if (isInputSpecialChar) {
    var specialChar = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@"];
    var inputSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];
    console.log(inputSpecialChar);
  }

  return (inputLower + inputUpper + inputNumber + inputSpecialChar);
  console.log(NewPassword);

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