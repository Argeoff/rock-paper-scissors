//Javascript for simple rock paper scrissors game
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scrissorsButton = document.querySelector("#scissors");
let computerChoice;

rockButton.addEventListener("click", () => {
	const humanChoice = "Rock";
	getcomputerChoice ();
	console.log(humanChoice + ", " + computerChoice);
	playRound(humanChoice,computerChoice);
});
paperButton.addEventListener("click", () => {
	const humanChoice = "Paper";
	getcomputerChoice ();
	console.log(humanChoice + ", " + computerChoice);
	playRound(humanChoice,computerChoice);
});
scrissorsButton.addEventListener("click", () => {
	const humanChoice = "Scissors";
	getcomputerChoice ();
	console.log(humanChoice + ", " + computerChoice);
	playRound(humanChoice,computerChoice);
});

function getcomputerChoice(){
	computerChoice = Math.floor(Math.random() * 3) + 1; //output a random number (0 to 3)
	switch (computerChoice){
		case 1:
		computerChoice = "Rock";
		break;
		case 2:
		computerChoice = "Paper";
		break;
		case 3:
		computerChoice = "Scissors";
		break;	
	}
};

function playRound(humanChoice,computerChoice){
	
	//Checking for invalid user entries
	if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors"){
		alert("You made an invalid entry!");
	}	
	else if (humanChoice === computerChoice){
		//tieStyle();
		console.log ("it's a tie!")
	}
	else if (humanChoice === "Rock"){
		if (computerChoice === "Scissors"){
			//humanScore++;
			//winStyle();
			console.log("Win!");
		}
		else {
			//computerScore++;
			//loseStyle();
			console.log("Lose!");
		}
	}
	else if (humanChoice === "Paper"){
		if (computerChoice === "Rock"){
			//humanScore++;
			//winStyle();
			console.log("Win!");			
		}
		else {
			//computerScore++;
			//loseStyle();
			console.log("Lose!");
		}
	}
	else if (humanChoice === "Scissors"){
		if (computerChoice === "Paper"){
			//humanScore++;
			//winStyle();
			console.log("Win!");
		}
		else {
			//computerScore++;
			//loseStyle();
			console.log("Lose!");
		}
	}	
};

/*const roundDisplay = document.getElementById("roundDisplay");
const playerScore = document.getElementById("playerScore");
const result = document.getElementById("result");
const playButton = document.querySelector(".playButton");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let gameRound = 0;

//this listens to playbutton and runs its code when button is pressed
playButton.addEventListener("click", ()=> {	
	gethumanChoice();
	getcomputerChoice();
	playGame();
	
	console.log("Game Round : " + gameRound);
	
	//changes html paragraphs display accordingly
	roundDisplay.textContent = ("Game Round : " + gameRound + " / 5");
	playerScore.textContent = ("Current Score (Human Versus Computer): " + humanScore + " | " + computerScore);
});

function gethumanChoice(){
	humanChoice = prompt("Rock, Paper or Scissors?");
	//transform whole string into lowercase
	humanChoice = humanChoice.toLowerCase();
	//Capitalize first letter
	humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
	console.log("Human Choice: " + humanChoice);
};

function playRound(humanChoice,computerChoice){
	
	//Checking for invalid user entries
	if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors"){
		alert("You made an invalid entry!");
	}	
	else if (humanChoice === computerChoice){
		tieStyle();
	}
	else if (humanChoice === "Rock"){
		if (computerChoice === "Scissors"){
			humanScore++;
			winStyle();
		}
		else {
			computerScore++;
			loseStyle();
		}
	}
	else if (humanChoice === "Paper"){
		if (computerChoice === "Rock"){
			humanScore++;
			winStyle();
		}
		else {
			computerScore++;
			loseStyle();
		}
	}
	else if (humanChoice === "Scissors"){
		if (computerChoice === "Paper"){
			humanScore++;
			winStyle();
		}
		else {
			computerScore++;
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
	console.log("It's a Tie!");
	result.style.backgroundColor = "blue";
	result.style.color = "white";
	result.textContent = ("It's a Tie!");
};

function winStyle(){
	console.log ("You win! " + humanChoice + " beats " + computerChoice);
	result.style.backgroundColor = "green";
	result.style.color = "white";
	result.textContent = ("You Win! " + humanChoice + " beats " + computerChoice);
};

function loseStyle(){
	console.log ("You lose! " + computerChoice + " beats " + humanChoice);
	result.style.backgroundColor = "red";
	result.style.color = "white";		
	result.textContent = ("You Lose! " + computerChoice + " beats " + humanChoice);
};
*/

