// Assignment Code
var generateBtn = document.querySelector("#generate");

var colArr = [];

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
  
  var newPassword="";

  // User prompted for the length of the password.
  var inputLength = prompt("Enter length of password needed between 8 - 128.");
  
  // Password length less than 8 characger, greater than 128 character and anything other than numerical value is invalid input. 
  if((inputLength < 8) || (inputLength > 128) || (isNaN(inputLength))){
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
      // When all inputs are selected as 'OK'
      if ((isInputLower) && (isInputUpper) && (isInputNumber) && (isInputSpecialChar)) {
        var newString = lowerChar.join("") + numChar.join("") + upperChar.join("") + specialChar.join("");
        console.log(newString);

        // When 3 out of 4 inputs are selected as 'OK'
      } else if ((isInputLower) && (isInputUpper) && (isInputNumber)) {
          var newString = lowerChar.join("") + upperChar.join("") + numChar.join("");
          console.log(newString);
      } else if ((isInputLower) && (isInputUpper) && (isInputSpecialChar)) {
        var newString = lowerChar.join("") + upperChar.join("") + specialChar.join("");
        console.log(newString);
      } else if ((isInputLower) && (isInputNumber) && (isInputSpecialChar)) {
        var newString = lowerChar.join("") + numChar.join("") + specialChar.join("");
        console.log(newString);
      } else if ((isInputUpper) && (isInputNumber) && (isInputSpecialChar)) {
        var newString = upperChar.join("") + numChar.join("") + specialChar.join("");
        console.log(newString);

        // When 2 out of 4 inputs are selected as 'OK'
      } else if ((isInputLower) && (isInputUpper)) {
        var newString = lowerChar.join("") + upperChar.join("");
        console.log(newString);
      } else if ((isInputLower) && (isInputNumber)) {
        var newString = lowerChar.join("") + numChar.join("");
        console.log(newString);
      } else if ((isInputLower) && (isInputSpecialChar)) {
        var newString = lowerChar.join("") + specialChar.join("");
        console.log(newString);
      } else if ((isInputUpper) && (isInputNumber)) {
        var newString = upperChar.join("") + numChar.join("");
        console.log(newString);
      } else if ((isInputUpper) && (isInputSpecialChar)) {
        var newString = upperChar.join("") + specialChar.join("");
        console.log(newString);
      } else if ((isInputNumber) && (isInputSpecialChar)) {
        var newString = numChar.join("") + specialChar.join("");
        console.log(newString);

        // When 1 out of 4 input is selected as 'OK'
      } else if (isInputLower) {
        var newString = lowerChar.join("");
        console.log(newString);
      } else if (isInputUpper) {
        var newString = upperChar.join("");
        console.log(newString);
      } else if (isInputNumber) {
        var newString = numChar.join("");
        console.log(newString);
      } else if (isInputSpecialChar) {
        var newString = specialChar.join("");
        console.log(newString);
      } 

      // Loop to generate password based on length input.
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



