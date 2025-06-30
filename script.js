//Javascript for simple rock paper scrissors game

const playButton = document.querySelector(".playButton");
const roundDisplay = document.getElementById("roundDisplay");
const playerScore = document.getElementById("playerScore");
const playerChoice = document.getElementById("playerChoice");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let gameRound = 0;

playButton.addEventListener("click", ()=> {	
	gethumanChoice();
	getcomputerChoice();
	playGame();
	
	console.log("Game Round : " + gameRound);
	roundDisplay.textContent = ("Game Round : " + gameRound);
	playerScore.textContent = ("Score (Human Versus Comupter): " + humanScore + " , " + computerScore);
	playerChoice.textContent = ("You played: " + humanChoice + " , Computer played: " + computerChoice);
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
		if (computerChoice === "rock"){
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



