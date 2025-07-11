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

function getHumanChoice(){
    var input = prompt("Rock, Paper or Scissors?");
    return input;
}

var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();