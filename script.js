//Javascript for simple rock paper scrissors game


const roundDisplay = document.getElementById("roundDisplay");
const playerScore = document.getElementById("playerScore");
const result = document.getElementById("result");
const playButton = document.querySelector(".playButton");
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
	playerScore.textContent = ("Current Score (Human Versus Computer): " + humanScore + " | " + computerScore);
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
		tieStyle();
	}
	else if (humanChoice === "rock"){
		if (computerChoice === "scissors"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
			winStyle();
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);
			loseStyle();
		}
	}
	else if (humanChoice === "paper"){
		if (computerChoice === "rock"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
			winStyle();
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);
			loseStyle();
		}
	}
	else if (humanChoice === "scissors"){
		if (computerChoice === "paper"){
			humanScore++;
			console.log ("You win! " + humanChoice + " beats " + computerChoice);
			winStyle();
		}
		else {
			computerScore++;
			console.log ("You lose! " + computerChoice + " beats " + humanChoice);
			loseStyle();
		}
	}	
};

function playGame() {
	gameRound ++;
	if (gameRound <= 4) {
		playRound(humanChoice,computerChoice);
	}
	else {
		if (humanScore === computerScore){
			console.log ("Game Over! It is a TIE!");
			result.textContent = ("Game Over! It is a TIE!");
		}
		else if (humanScore > computerScore){
			console.log ("Game Over! You WIN!");
			result.textContent = ("Game Over! You WIN!");	
		}
		else{
			console.log ("Game Over! You LOSE!");
			result.textContent = ("Game Over! You LOSE!");
		}
	console.log (humanScore + " , " + computerScore);
	}
};

function tieStyle (){
	result.style.backgroundColor = "blue";
	result.style.color = "white";
	result.textContent = ("It's a Tie!");
};

function winStyle(){
	result.style.backgroundColor = "green";
	result.style.color = "white";
	result.textContent = ("You win! " + humanChoice + " beats " + computerChoice);
};

function loseStyle(){
	result.style.backgroundColor = "red";
	result.style.color = "white";		
	result.textContent = ("You lose! " + computerChoice + " beats " + humanChoice);
};


