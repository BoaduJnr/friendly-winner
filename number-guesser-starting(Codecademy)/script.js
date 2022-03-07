let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    let random = Math.round(Math.random()*9)
    return random
  }
  
  function compareGuesses(guess1, guess2, guess3){
      let user = Math.abs(guess1, guess3);
      let auto = Math.abs(guess2, guess3)
      if (user > auto ){
          return false
      }
      else{
          return true
      }
      
    
  }

  
  function updateScore(win){
        if(win === 'human'){
            humanScore ++;
        }
        if(win === 'computer'){
            computerScore ++;
        }
     };
  
  const advanceRound = function (){
   currentRoundNumber++ 
    };