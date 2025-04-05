const prompt = require("prompt-sync")()
let correctPassword = "etccJsTutorials";
let attempts = 0;
let maxAttempts = 3;
let inputPassword = "";

// Loop will continue as long as attempts are less than maxAttempts and password is incorrect
while (attempts < maxAttempts && inputPassword !== correctPassword) {
  inputPassword = prompt("Enter your password:");

  if (inputPassword === correctPassword) {
    console.log("Access granted!");
  } else if (inputPassword === "") {
    console.log("No input. Try again.");
  } else {
    console.log("Wrong password.");
  }

  attempts++;
}