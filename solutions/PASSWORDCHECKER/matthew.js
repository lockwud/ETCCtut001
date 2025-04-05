const prompt=require("prompt-sync")()
const correctPassword = "etccJsTutorials";

for (let attempts = 1; attempts <= 3; attempts++) {
  let input = prompt("Enter the password:");

  if (input === correctPassword) {
    console.log("Access granted.");
    break;
  } else if (input === "") {
    console.log("No input. Try again.");
  } else {
    console.log("Wrong password.");
  }

  if (attempts === 3) {
    console.log("Too many attempts. Access denied.");
  }
}
