//Javascript for simple rock paper scrissors game

const playButton = document.querySelector(".playButton");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let gameRound = 1;

/*playButton.addEventListener("click", ()=> {
	humanSelection = prompt ("Rock, Paper or Scissors?");
	gethumanChoice(humanSelection);
	getcomputerChoice();
	playRound(humanChoice,computerChoice);
	console.log("Scoreboard (Human vs Computer): " + humanScore + " , " + computerScore);
});*/

playButton.addEventListener("click", ()=> {
	console.log("Game Round : " + gameRound);
	gethumanChoice();
	getcomputerChoice();
	playGame();
});

function gethumanChoice(){
	humanChoice = prompt("Rock, Paper or Scissors?");
	humanChoice = humanChoice.toLowerCase();
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

function playGame() {
	gameRound ++;
	if (gameRound <= 5) {
		playRound(humanChoice,computerChoice);
	}
	else {
		if (humanScore === computerScore){
			console.log ("Game Over! It is a TIE!");
		}
		else if (humanScore > computerScore){
			console.log ("Game Over! You WIN!");			
		}
		else{
			console.log ("Game Over! You LOSE!");
		}
	console.log (humanScore + " , " + computerScore);
	}
};



