//Javascript for simple rock paper scrissors game

const playButton = document.querySelector(".playButton");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

playButton.addEventListener("click", ()=> {
	humanChoice = prompt ("Rock, Paper or Scissors?");
	gethumanChoice(humanChoice);
	getcomputerChoice();
});

function gethumanChoice(humanChoice){
	humanChoice = humanChoice.toLowerCase();
	console.log("Human Choice: " + humanChoice);
};

function getcomputerChoice (){
	computerChoice = Math.floor(Math.random() * 3) +1;
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
};
