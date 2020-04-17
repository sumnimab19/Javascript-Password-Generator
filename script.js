
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  
  var newPassword = "";
  var newString;

  // User prompted for the length of the password.
  var inputLength = prompt("Enter length of password needed between 8 - 128.");
  
  // Password length less than 8 characger, greater than 128 character and anything other than numerical value is invalid input. 
  if((inputLength < 8) || (inputLength > 128) || (isNaN(inputLength) || (!isNaN(inputLength) && inputLength.toString().indexOf('.') != -1))){
    alert("'" + inputLength + "'" + " is Invalid Input. Please enter a number between 8 and 128 to generate a valid password.");
  }
  else {
    // User presented with a series of confirms for password criteria - lowercase, uppercase, numeric, and special characters
    var isInputLower = confirm("Do you want to include Lower Case characters?");
    var isInputUpper = confirm("Do you want to include Upper Case characters?");
    var isInputNumber = confirm("Do you want to include Number?");
    var isInputSpecialChar = confirm("Do you want to include Special Characters?")

    // Input validation - at least one character type should be selected.
    if ((!isInputLower) && (!isInputUpper) && (!isInputNumber) && (!isInputSpecialChar)) {
      alert("You must select at least one character type to generate valid password.");
    } else{

      // Conditional statements to generate password that matches the selected criteria.

      // --- When all 4 inputs are selected ---
      if ((isInputLower) && (isInputUpper) && (isInputNumber) && (isInputSpecialChar)) {
        newString = lowerChar.join("") + numChar.join("") + upperChar.join("") + specialChar.join("");
        
        
        // --- When 3 out of 4 inputs are selected ---
      } else if ((isInputLower) && (isInputUpper) && (isInputNumber)) {
          newString = lowerChar.join("") + upperChar.join("") + numChar.join("");
      } else if ((isInputLower) && (isInputUpper) && (isInputSpecialChar)) {
          newString = lowerChar.join("") + upperChar.join("") + specialChar.join("");
      } else if ((isInputLower) && (isInputNumber) && (isInputSpecialChar)) {
          newString = lowerChar.join("") + numChar.join("") + specialChar.join("");
      } else if ((isInputUpper) && (isInputNumber) && (isInputSpecialChar)) {
          newString = upperChar.join("") + numChar.join("") + specialChar.join("");

        // --- When 2 out of 4 inputs are selected ---
      } else if ((isInputLower) && (isInputUpper)) {
          newString = lowerChar.join("") + upperChar.join("");
      } else if ((isInputLower) && (isInputNumber)) {
          newString = lowerChar.join("") + numChar.join("");
      } else if ((isInputLower) && (isInputSpecialChar)) {
          newString = lowerChar.join("") + specialChar.join("");
      } else if ((isInputUpper) && (isInputNumber)) {
          newString = upperChar.join("") + numChar.join("");
      } else if ((isInputUpper) && (isInputSpecialChar)) {
          newString = upperChar.join("") + specialChar.join("");
      } else if ((isInputNumber) && (isInputSpecialChar)) {
          newString = numChar.join("") + specialChar.join("");

        // --- When 1 out of 4 input is selected ---
      } else if (isInputLower) {
          newString = lowerChar.join("");
      } else if (isInputUpper) {
          newString = upperChar.join("");
      } else if (isInputNumber) {
          newString = numChar.join("");
      } else if (isInputSpecialChar) {
          newString = specialChar.join("");
      } 

      // Loop to generate password based on length of the input.
      for (var i = 0; i < inputLength; i++) {
        var randomString = newString[Math.floor(Math.random() * newString.length)];
        newPassword+= randomString;
      }

      return (newPassword);
      }
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



