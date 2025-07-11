// console.log("Hello world");

function getComputerChoice(){
    var rng = Math.random();
    if (rng <= 0.33){
        return "Rock";
    } else if (rng > 0.33 && rng <= 0.66){
        return "Paper";
    } else if (rng > 0.66){
        return "Scissors"
    }
}

// console.log(getComputerChoice());
// We CAN print a function in the console, but remember to ass the ()!

function getHumanChoice(){
    var input = prompt("Rock, Paper or Scissors?");
    return input.toLowerCase();
}

// to.LowerCase() is a method, we have to always add the ()!

var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();

console.log(humanChoice);