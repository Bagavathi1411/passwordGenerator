// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create functions to generate random passwords//
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$^&*(){}=<>/,.[]:;";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var editBoxPrompts = getPrompts();
  if (editBoxPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
//Creating variables to store password length and number of arrays
var characterLength = 8;
var choiceArray = [];

function generatePassword() {
  var newPassword = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    newPassword = newPassword + choiceArray[randomLetter];
  }
  return newPassword;
}

function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(
    prompt("How many characters do you want have in your password ? ")
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits... Please try again"
    );
    return false;
  }
  if (confirm("Would you like to add lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(getRandomLower());
  }
  if (confirm("Would you like to add upppercase letters in your password?")) {
    choiceArray = choiceArray.concat(getRandomUpper());
  }
  if (confirm("Would you like to add numbers in your password?")) {
    choiceArray = choiceArray.concat(getRandomNumber());
  }
  if (confirm("Would you like to add special characters in your password?")) {
    choiceArray = choiceArray.concat(getRandomSymbol());
  }
  return true;
}
