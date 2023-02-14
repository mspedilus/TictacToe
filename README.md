# TictacToe

Tic Tac Toe Game made with HTML, CSS, JavaScript, jQuery, and Bootstrap5
files include hw2.html, styles.css, and script.js

 CheckForDraw(): Scans all cells in the tic tac toe board to see if all cells are filled. If all cells are filled, the game status will show that it was a draw.

computerTurn(): A random number between 0-8 is created. The function checks to see if the cell in that location is filled. If it is filled another random number is generated. If it is not filled the computer displays an "O" in that location.

restart.addEventListener(): A button that once clicked restarts the game by removing all highlights and previous moves & winner.

cells.forEach(): Records and updates the tic tac toe whenever a user clicks on a cell or the computer makes a move.

highlightCells(): Displays a highlight of the winning pattern.

function checkForWinner(): Checks to see a winning pattern has been made. If it has it highlights the winning pattern, displays the scores, and displays the winner. 

firstMove(): Randomly selects a player to make a move first.
