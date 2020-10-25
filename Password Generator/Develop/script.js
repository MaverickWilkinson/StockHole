// Assignment Code
var generateBtn = document.querySelector("#generate");

//sets up the variables needed for the generation. this will be done every time the button is pressed.
var numCharConfirm = false;
var charTypesConfirm = false;

var lowerCase = false;
var upperCase = false;
var numericals = false;
var specials = false;
var passwordchararray
var password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  passwordchararray = generatePassword();
  password = new String(passwordchararray);
  
  for (i = 0; i < passwordchararray.length; i++){
    //this part was annoying. the replace function only replaces 1 element in the array so you need to do it as many times as there are characters to remove all of the commas between the items.
  password = password.replace(",", "");
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateLowerChar(){
//chooses the number to associate with the letter
 alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 return alphabet[(Math.floor(Math.random() * Math.floor(26)))]
}
function generateNumber(){
  //returns a number between 0 and 9
  var genNum = (Math.floor(Math.random() * Math.floor(10)));
  genNum = genNum.toString();
  return genNum;
}
function generateSpecial(){
 specialAlphabet = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","'","<",">",".","?","/"];
 return specialAlphabet[(Math.floor(Math.random() * Math.floor(27)))]
}

function chooseCharType(){
  while (true){
    var choice = (Math.floor(Math.random() * Math.floor(4)) + 1);
    //this gives a number between 1 and 4
    //returning 1 means the character will be a lowercase letter
    //returning 2 means the character will be an uppercase letter
    //returning 3 means the character will be a number
    //returning 4 means the character will be a special character
    if ((lowerCase == true && choice == 1) || (upperCase == true && choice == 2) || (numericals == true && choice == 3) || (specials == true && choice == 4)){
      return choice; //this return, in theory, should break out of the while loop and return the value only if it is one of the results the user wanted.
    }
  }
}

function generateChar(){
  thisCharType = chooseCharType();
  switch(thisCharType){
    case 1:
      return generateLowerChar();
    case 2:
      return generateLowerChar().toUpperCase();
    case 3:
      return generateNumber();
    case 4:
      return generateSpecial();
  }
}


function generatePassword() {
  //while loop so that I can varify and reprompt the user if they give invalid inputs
  while(numCharConfirm == false){ 
    var numChar = prompt("How many characters would you like? only passwords from 8 characters to 128 characters are allowed.");
    if (numChar < 8 || numChar > 128){ //validates that they gave a proper number. if this fails, the program exits the if statement and goes through the while loop again.
      alert("Please give a number that is 8 or more, and 128 or less.")
    }
    else{
      //creates a variable for the array of characters that will be eventually stringed together to form the sting value of the password. it uses the number of characters the user gave for its length.
      var passwordStringArray = new Array();
      numCharConfirm = true;
    }
  }
  //a while loop to confirm that the user chooses at least one type of character for the password.
  while (charTypesConfirm == false){
    lowerCase = confirm("Press OK if you would like Lowercase characters.");
    upperCase = confirm("Press OK if you would like Uppercase characters.");
    numericals = confirm("Press OK if you would like Numerical characters.");
    specials = confirm("Press OK if you would like Special characters.");
    if (lowerCase == false && upperCase == false && numericals == false && specials == false){ //if this if statement fails, it will alert the user that they did not choose an option and will go back to the while loop.
      alert("please choose at least 1 character type.") 
    }
    else{
      charTypesConfirm = true; //sets the value to true so that the while loop doesn't repeat.
    }
  }


  for (var i = 0; i < numChar; i++){
    passwordStringArray.push(generateChar())
  }
  return passwordStringArray;
}
