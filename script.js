// Assignment code here

const cardBody = document.querySelector(".card-body");
const passWord = document.querySelector("#password");
const generateBtn = document.querySelector("#generate");

const lowChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const specChar = [
  "",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  ">",
  "<",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
];

function generatePassword() {
  let userLgth;
  let lowCaseChoice;
  let upperCaseChoice;
  let numberChoice;
  let specialCharChoice;
  let charChoice = [];
  let finalChoice = [];

  userLgth = parseInt(
    Number(
      prompt(
        "How many charcters for your password? (between 8-128 charachters)"
      )
    )
  );

  if (isNaN(userLgth) || userLgth < 8 || userLgth > 128) {
    alert("number must be within 8 - 128");
    return;
  }

  lowCaseChoice = confirm(
    "Would you like lowercase letters? Click Ok for yes, and cancel for No"
  );

  if (lowCaseChoice == true) {
    for (let i = 0; i < userLgth; i++) {
      let nextChar = Math.floor(Math.random() * lowChar.length);
      charChoice.push(lowChar[nextChar]);
    }
  }

  upperCaseChoice = confirm(
    "Would you like UPPERCASE letters? Click Ok for yes, and cancel for No"
  );

  if (upperCaseChoice == true) {
    for (let i = 0; i < userLgth; i++) {
      let nextChar = Math.floor(Math.random() * upChar.length);
      charChoice.push(upChar[nextChar]);
    }
  }

  numberChoice = confirm(
    "Would you like numbers? Click Ok for yes, and cancel for No"
  );

  if (numberChoice == true) {
    for (let i = 0; i < userLgth; i++) {
      let nextChar = Math.floor(Math.random() * numChar.length);
      charChoice.push(numChar[nextChar]);
    }
  }

  specialCharChoice = confirm(
    "Would you like Special Charcters? Click Ok for yes, and cancel for No"
  );

  if (specialCharChoice == true) {
    for (let i = 0; i < userLgth; i++) {
      let nextChar = Math.floor(Math.random() * specChar.length);
      charChoice.push(specChar[nextChar]);
    }
  }

  for (let i = 0; i < userLgth; i++) {
    let password = Math.floor(Math.random() * charChoice.length);
    finalChoice.push(charChoice[password]);
  }
  for (let i = 0; i < userLgth; i++) {
    passWord.value += finalChoice[i];
  }
  // if (
  //   (lowCaseChoice == false,
  //   upperCaseChoice == false,
  //   numberChoice == false,
  //   specialCharChoice == false)
  // ) {
  //   alert("You must select at leat one charcter type");
  //   return;
  // }
  // console.log(specialCharChoice);
  // console.log(charChoice);
  // console.log(lowCaseChoice);
  // console.log(upperCaseChoice);
  // console.log(numberChoice);
  console.log(finalChoice);
}

generateBtn.addEventListener("click", generatePassword);
