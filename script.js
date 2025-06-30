//Javascript for simple rock paper scrissors game

const playButton = document.querySelector(".playButton");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

playButton.addEventListener("click", ()=> {
	humanSelection = prompt ("Rock, Paper or Scissors?");
	gethumanChoice(humanSelection);
	getcomputerChoice();
	playRound(humanChoice,computerChoice);
	console.log("Scoreboard (Human vs Computer): " + humanScore + " , " + computerScore);
});

function gethumanChoice(humanSelection){
	humanChoice = humanSelection.toLowerCase();
	console.log("Human Choice: " + humanChoice);
};

function getcomputerChoice(){
	computerChoice = Math.floor(Math.random() * 3) + 1;
	switch (computerChoice){
		case 1:
		computerChoice = "rock";
		break;
		case 2:
		computerChoice = "paper";
		break;
		case 3:
		computerChoice = "scissors";
		break;	
	}
	console.log("Computer Choice: " + computerChoice);	
};

function playRound(humanChoice,computerChoice){
	if (humanChoice === computerChoice){
		console.log("It's a Tie!");
	}
	else if (humanChoice === "rock"){
		if (computerChoice === "scissors"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);
		}
	}
	else if (humanChoice === "paper"){
		if (computerChoice === "scissors"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);			
		}
	}
	else if (humanChoice === "scissors"){
		if (computerChoice === "paper"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);			
		}
	}	
};



