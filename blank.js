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

var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();

// console.log(humanChoice);

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice,computerChoice){
    if (humanChoice == computerChoice.toLowerCase()){
        return `It's a tie! You both played ${humanChoice}`
    }

    else if (humanChoice == "rock"){
        if (computerChoice == "Paper"){
            computerScore += 1;
            return "You lose! Paper beats Rock.";
        } else if (computerChoice == "Scissors"){
            humanScore += 1;
            return "You win! Rock beats Scissors.";
        }
    }
    }

    // RETURN HAS TO BE THE LAST STATEMENT, IF NOT ALL CODE AFTERWARDS IS UNREACHABLE

    console.log(playRound(humanSelection,computerSelection));
    console.log(humanScore);
    console.log(computerScore);