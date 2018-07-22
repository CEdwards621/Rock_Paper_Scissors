const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid options, select anoter choice.');
    return userInput;
  }
};

const getComputerChoice = () => {
  let num = Math.floor(Math.random()*3);
  switch(num){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log("Error selecting computer's choice");
      break;
  }
  
};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a TIE!";
  } else if (userChoice === 'bomb') {
    return "Congratulations, you WON!";       
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, the computer WINS!";
    } else {
      return "Congratulations, you WON!";
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry, the computer WON!";
    } else {
      return "Congratulations, you WON!";
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, the computer WON!";
    } else {
      return "Congratulations, you WON!";
    }
  } else {
    return "ERROR! Cannot determine winner.";
  }
};

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  
  console.log("User's choice: " + 
userChoice);
console.log("PC's choice: " + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
