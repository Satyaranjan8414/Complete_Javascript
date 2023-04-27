//Small Game By Using Nested Loop

//Nested If Else Codition 
let winningNumber=13;
let userGuess=+prompt("Guess a Number")

// console.log(userGuess,typeof(userGuess));


if(userGuess==winningNumber){
    console.log("You win!");
    
}else{
   if(userGuess>winningNumber){
    console.log(" Opps!! You are  guessed higher than you win");
    
   }else{
    console.log("Opps!! You are guessed lower than you win");
    
   }
    
}