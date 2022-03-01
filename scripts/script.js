//Array and variables set up
const cells = Array.from(document.querySelectorAll('.cell')); 
const spaces = [null, null, null, null, null, null, null, null, null];
let notDraw = true;
let winnerFound = false;
var first = true;
var computerScore = 0;
var myScore = 0;
let currentPlayer = "X";

//All possible win condition locations
let winningCombinations = [[0,1,2],
                           [3,4,5],
                           [6,7,8],
                           [0,3,6],
                           [1,4,7],
                           [2,5,8],
                           [0,4,8],
                           [2,4,6]];

//Randomly selects who goes first
function firstMove(){
  $("#player").show();
  first = false;
  let x = Math.random();
  if (x > 0.5) computerTurn(); // true computer goes first else user goes first
  document.getElementById("player").innerText = "Player " + currentPlayer + " (Your turn)"; //displays whos turn it is
}

//Updates the tic tac toe board whenever the the user clicks a tile or the computer makes its move
cells.forEach(function(cell){
  if(first) firstMove();
  cell.addEventListener('click', function(){
    console.log(cell);
     document.getElementById("player").innerText = "Player " + currentPlayer + " (Your turn)"; //displays whos turn it is
     if(cell.innerText.trim() != "") return; //If the cell isn't empty do nothing
     cell.innerText = currentPlayer;  
     checkForWinner();
     if(winnerFound != true) computerTurn(); //Let's the computer make a move as long as the game isn't over
  })
})

//Random moves made by the computer
function computerTurn(){
  CheckForDraw();
  //Lets the computer make a move if it's able to
  if(notDraw){
    currentPlayer = "O";
    document.getElementById("player").innerText = "Player " + currentPlayer + " (Computer turn)"; //displays that it's the player turn
    let x = Math.floor(Math.random() * 9); //Randomly selects one of the 9 cells
    while(cells[x].innerText.trim() != ""){   //Makes sure that the cell is empty
      x = Math.floor(Math.random() * 9);
    }
    cells[x].innerText = currentPlayer; //If the cell isn't empty the computer can make it's move at the location of x    
  }
checkForWinner();
currentPlayer = "X";
document.getElementById("player").innerText = "Player " + currentPlayer + " (Your turn)" //displays that it's the player turn
if(!winnerFound) CheckForDraw();  
}


//Checks to see if a win condition has been met
function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(index => cells[index].innerText.trim() == currentPlayer);
        //If there is a match for a win condition increase the score, show who won, and highlight the winning pattern
        if(check){
            if(winnerFound == false){
              winnerFound = true;
              //Updates the score
              if(currentPlayer == "O") computerScore++;
              else myScore++;
              document.getElementById("scores").innerText = "My Score: " + myScore + " | Computer Score: " + computerScore;
            }
            highlightCells(combination); //shows the winning pattern
            $("#player").hide();
            $("#winner").show();
            document.getElementById("winner").innerText = "Player " + currentPlayer + " has won!"; //displays who won
        }
    })
}

//Checks to see if all cells are used to declare if there is a draw
function CheckForDraw(){
  for(let x = 0; x <= 8; x++){
    if(cells[x].innerText.trim() == ""){
      return;
    }
  }
  notDraw = false;
  $("#player").hide(); //hides the player turn info
  $("#winner").show();
  document.getElementById("winner").innerText = "It was a Draw."; //displays that there is a draw
}

//Adds a highlight to the winning condition pattern
function highlightCells(combination){
  combination.forEach(function(index){
      cells[index].classList.add("highlight");
  })
}

//Restarts the game by clearing the board and removing the highlight
restart.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("highlight"); //Removes winning higlighted pattern
  });  
  $("#winner").hide(0); //Hides winner of the previous game
  notDraw = true;
  winnerFound = false;
  first = true;
  firstMove();
});