

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


// We CAN print a function in the console, but remember to ass the ()!

function getHumanChoice(){
    var input = prompt("Rock, Paper or Scissors?");
    return input.toLowerCase();
}

// to.LowerCase() is a method, we have to always add the ()!


    // when you define a new variable to a function, it automatically gets called!
var computerSelection = getComputerChoice();

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

    else if (humanChoice == "paper"){
        if (computerChoice == "Scissors"){
            computerScore += 1;
            return "You lose! Scissors beats Paper.";
        } else if (computerChoice == "Rock"){
            humanScore += 1;
            return "You win! Paper beats Rock.";
        }
    }

    else if (humanChoice == "scissors"){
        if (computerChoice == "Rock"){
            computerScore += 1;
            return "You lose! Rock beats Scissors.";
        } else if (computerChoice == "Paper"){
            humanScore += 1;
            return "You win! Scissors beats Paper.";
        }
    }
    }

    // RETURN HAS TO BE THE LAST STATEMENT, IF NOT ALL CODE AFTERWARDS IS UNREACHABLE

    alert("Please open the console to view game log\n CMD + Option + J on Mac\n Ctrl + Shift + J on Windows")

    function playGame(){
        for (let i = 0; i < 5; i++){
            console.log(playRound(getHumanChoice(),getComputerChoice()));
            console.log(`Your current score: ${humanScore}`);
            console.log(`The opponent's current score: ${computerScore}`)
            console.log(' ')
        }
            if (humanScore > computerScore){
                console.log(`You are the winner!`)
                alert("You won!");
             } else if (computerScore > humanScore){
                console.log(`The opponent won`)
                alert("Unfortunately, you lost");
             } else if (computerScore == humanScore){
                console.log(`It's a tie!`)
                alert("You both tied!")
            }
    }

    playGame();