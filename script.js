
// Create an array of specialcharacters
var specialcharacters = "!@#$%^&*()_+-={}[]:";
// Create an array of numericcharacters
var numericcharacters = "0123456789";
// Create an array of uppercasecharacters
var uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Create an array of lowercasecharacters
var lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
// Create an array of userchioces ( userChoices + special or numeric,  uppercase & lowercase characters = userChoices)
var userChoices = "";




// create a function to get password length info from user 
function writePassword() {
  var password = "";
  var length = parseInt(prompt('how many characters would you like your password to contain? (Between 8-128)'))
  console.log("length", length)

  // if length is less than 8 alert the user that min password length is 8
  if (length < 8) {
    alert('password length must be at least 8 characters');
    return;
     // if length is grater than  128 alert the user that max password length is 128
  } else if (length > 128) {
    alert ('Password length must less than 128 characters');
    return;
  } else {
   
    // confirming with user that they need specialcharacters in their password
    var specialChar = confirm("Would you like special characters in your password?")
    console.log("specialChair confir", specialChar)

    // if specialcharacters are true then include it if not skip to next one
    if(specialChar === true){
      userChoices += specialcharacters; 
      
    }

      // confirming with user that they need numbers in their password
    var numbers = confirm("Would you like numbers in your password?")

    // if numbers are true then include it if not skip to next one
    if(numbers === true){
      userChoices += numericcharacters; 
    }

      // confirming with user that they need uppercase in their password
    var upperCase = confirm("Would you like uppercase characters in your password?")

    // if uppercase are true then include it if not skip to next one
    if(upperCase === true){
      userChoices += uppercasecharacters; 
    }

      // confirming with user that they need lowercases in their password
    var lowerCase = confirm("Would you like lowercase characters in your password?")

// if lowercase are true then include it if not skip to next one
    if(lowerCase === true){
      userChoices += lowercasecharacters; 
    }
    console.log("userChoices", userChoices)


    
    for(var i =0; i< length; i++){
   
      // this will randomizer the password according to userChoices
      var randomizer = Math.floor(userChoices.length * Math.random())
  
      password += userChoices.charAt(randomizer)
      console.log(randomizer)
      console.log(password)
    }



  }




// Write password to the #password input
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn = document.getElementById("generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
