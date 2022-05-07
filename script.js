// Assignment code here





var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
 
var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var specChar = ["","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";",">","<","=","?","@","[","]","^","_","{","}","|","~",]

function generatePassword() {
  
  var userLgth = prompt("How many charcters for your password?");


  if (isNaN(userLgth) || userLgth < 8 || userLgth > 128) {
    userLgth = prompt("number must be within 8 - 128");
  } else {
    var userLowcase = confirm("Would you like lowercase letters?");
    // var userUpper = confirm("Would you like UPPER case letters?");
    // var userNum = confirm("Would you like to use numbers?");
    // var userSpec = confirm("would you like to have any special characters?");
 
    var passSelect = {
      length: userLgth,
      // lettLow: userLowcase,
      // lettUp: userUpper,
      // lettNum: userNum,
      // lettSpec: userSpec,
    }

    
    
    
  }

  // var loChoice = [];
  // if (passSelect.lettLow) {
  //   for (var i = 0; i < passSelect.length; i++) {
  //     var lettLow = lowChar[Math.floor(Math.random()) * passSelect.length];
  //     lettUp.push(lettLow);
  //   }

  // }

  // var upChoice = [];
  // if (passSelect.lettUp)
  //   for (var i = 0; i < passSelect.length; i++) {
  //     var upchoice = upChar[Math.floor(Math.random()) * passSelect.length];
  //     lettUp.push(lettUp);
  //   }
  // var numChoice = [];
  // if (passSelect.lettNum) {
  //   for (var i = 0; i < passSelect.length; i++) {
  //     var lettLow = lowChar[Math.floor(Math.random()) * passSelect.length];
  //     lettUp.push(lettNum);
  //   }

  
  //   var specChoice = [];
  //   if (passSelect.lettSpec) {
  //     for (var i = 0; i < passSelect.length; i++) {
  //       var lettLow = lowChar[Math.floor(Math.random()) * passSelect.length];
  //       lettUp.push(lettSpec);
  //     }
    
    }
    // element.innerhtml  return  back to there

    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input

    var password = generatePassword("");
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // Add event listener to generate button
generateBtn.addEventListener("click", password); {
  for (var i = 0; i < generatePassword; i++); {
    var ranPass = Math.floor(Math.random() * passSelect.length);
    password += passSelect.length(ranPass, ranPass + 1);

  } 
    }

  console.log(generatePassword)

