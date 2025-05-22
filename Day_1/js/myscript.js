//Day one
console.log("Hello world");
const name = "Ruma Das";
const age = 50;
const goal = "Freelance Web Developer";
console.log(
  ` Hi my name is ${name} and my age is ${age} and i want to become ${goal} in 4 to 5 weeks `
);
//Day Two
const num1 = 4;
const num2 = 6;
const add = num1 + num2;
console.log(add);
let newNum = 9;
if (newNum % 2 === 0) {
  console.log(`${newNum} is an even number`);
} else {
  console.log(`${newNum} is an odd`);
}
//Day three
// const userName = prompt("Enter your name please");

// const greet = (userName) => {
//   console.log(` Hello ${userName}, How are you?`);
// };
// greet(userName);

// Day three Challenge
// const yourAge = prompt("Enter your birth year please");
// const currentYear = new Date().getFullYear();
// function findAge(yourAge) {
//   let ageNumber = Number(yourAge);
//   console.log(`You are ${currentYear - ageNumber} years old in ${currentYear}`);
// }
// findAge(yourAge);
//Day 4

const myTools = ["HTML", "Css", "JavaScript", "React.js"];
//For loops
const forTools = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(`My skill: ${data[i]}`);
  }
};
forTools(myTools);
console.log("********************");
//Foreach loop
const forEachLoop = (data) => {
  data.forEach((skill) => {
    console.log(` My tools present in for Each function ${skill}`);
  });
};
forEachLoop(myTools);
// push in array
const newTools = prompt("Enter your new skill please");
if (newTools) {
  myTools.push(newTools);
}

console.log("********************");
forTools(myTools);
console.log("********************");
forEachLoop(myTools);
//Day 5

const guessGame = () => {
  const comNumber = Math.floor(Math.random() * 10) + 1;
  console.log("Guess number", comNumber);
  let guess = Number(prompt(`Please enter a number`));
  let attempt = 1;

  while (guess !== comNumber && attempt <= 5 && guess !== 0) {
    console.log("attempt", attempt);
    console.log("Guess", guess);
    if (isNaN(guess)) {
      console.log("Not a number");
      attempt++;
      guess = Number(prompt(`Please enter a number`));
      continue;
    }
    if (guess < comNumber) {
      guess = Number(prompt(` Your number is smaller than the guess Number`));
    } else if (guess > comNumber) {
      guess = Number(prompt(`Your number is too big`));
    }
    attempt++;
  }
  if (guess === comNumber) {
    alert(`🎉 Correct! You guessed it.`);
  } else if (guess === 0) {
    alert(`🚫 You quit the game.`);
  } else {
    alert(`❌ You ran out of attempts. Game over. the number is ${comNumber}`);
  }

  // Ask to play again
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    guessGame();
  } else {
    alert("Thanks for playing!");
  }
};
guessGame();
