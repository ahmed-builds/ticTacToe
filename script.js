let turn = true;
let gameCells   =   document.getElementsByClassName("game_cell");
let gameNotfn   =   document.getElementById('game_notif');
let gameResult  =   document.getElementById('game_results');
const gameCellsArray = Array.from(gameCells);

let clicks = 0;

gameNotfn.textContent = 'Player 1 Turn - X';
gameNotfn.classList.add('player1');

const refreshGame = document.createElement('button');
refreshGame.textContent = 'Play Again';
refreshGame.id = 'playAgain';

// Checking for the CELLS value
let game_cell01 = document.getElementById("game_cell01");
let game_cell02 = document.getElementById("game_cell02");
let game_cell03 = document.getElementById("game_cell03");
let game_cell04 = document.getElementById("game_cell04");
let game_cell05 = document.getElementById("game_cell05");
let game_cell06 = document.getElementById("game_cell06");
let game_cell07 = document.getElementById("game_cell07");
let game_cell08 = document.getElementById("game_cell08");
let game_cell09 = document.getElementById("game_cell09");

gameCellsArray.forEach(function (gameCell) {
    // console.log(gameCell);

    gameCell.addEventListener('click', function (e) {
        clicks++;
        console.log(clicks);
        

        if(clicks == 9){
            // Game Draw

            let targetID = e.target.id;
            let updateValue = document.getElementById(targetID);

            if(turn){
                updateValue.textContent = 'X';
                updateValue.classList.add('player1');
                updateValue.classList.remove('player2');
                updateValue.style.pointerEvents = 'none';

                gameNotfn.classList.add('player2');
                gameNotfn.classList.remove('player1');
            } else {
                updateValue.textContent = 'O';
                updateValue.classList.add('player2');
                updateValue.classList.remove('player1');                
                updateValue.style.pointerEvents = 'none';
                
                gameNotfn.classList.remove('player2');
                gameNotfn.classList.add('player1');
            }
            gameDraw();
        } else if(clicks < 10){

            let targetID = e.target.id;
            let updateValue = document.getElementById(targetID);

            if(turn){
                updateValue.textContent = 'X';
                updateValue.classList.add('player1');
                updateValue.classList.remove('player2');
                updateValue.style.pointerEvents = 'none';

                gameNotfn.textContent = 'Player 2 Turn - O';
                gameNotfn.classList.add('player2');
                gameNotfn.classList.remove('player1');
            } else {
                updateValue.textContent = 'O';
                updateValue.classList.add('player2');
                updateValue.classList.remove('player1');                
                updateValue.style.pointerEvents = 'none';

                gameNotfn.textContent = 'Player 1 Turn - X';
                gameNotfn.classList.remove('player2');
                gameNotfn.classList.add('player1');
            }

            turn = !turn;

        }

        cell_01_value = game_cell01.textContent;
        cell_02_value = game_cell02.textContent;
        cell_03_value = game_cell03.textContent;
        cell_04_value = game_cell04.textContent;
        cell_05_value = game_cell05.textContent;
        cell_06_value = game_cell06.textContent;
        cell_07_value = game_cell07.textContent;
        cell_08_value = game_cell08.textContent;
        cell_09_value = game_cell09.textContent;


        //Check Whether X is winner
        if(cell_01_value === 'X' && cell_02_value === 'X' && cell_03_value === 'X') {

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet01();
            // Variables Ends here

        } else if(cell_04_value === 'X' && cell_05_value === 'X' && cell_06_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here    

            // Variables Starts here
                disableSet02();
            // Variables Ends here

        } else if(cell_07_value === 'X' && cell_08_value === 'X' && cell_09_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet03();
            // Variables Ends here

        } else if(cell_01_value === 'X' && cell_04_value === 'X' && cell_07_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet04();
            // Variables Ends here

        } else if(cell_02_value === 'X' && cell_05_value === 'X' && cell_08_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet05();
            // Variables Ends here

        } else if(cell_03_value === 'X' && cell_06_value === 'X' && cell_09_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet06();
            // Variables Ends here

        } else if(cell_01_value === 'X' && cell_05_value === 'X' && cell_09_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet07();
            // Variables Ends here

        } else if(cell_03_value === 'X' && cell_05_value === 'X' && cell_07_value === 'X'){

            // Default Starts here
                playerOneWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet08();
            // Variables Ends here

        }
        //Check Whether O is Winner
        else if(cell_01_value === 'O' && cell_02_value === 'O' && cell_03_value === 'O') {

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet01();
            // Variables Ends here

        } else if(cell_04_value === 'O' && cell_05_value === 'O' && cell_06_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet02();
            // Variables Ends here

        } else if(cell_07_value === 'O' && cell_08_value === 'O' && cell_09_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet03();
            // Variables Ends here

        } else if(cell_01_value === 'O' && cell_04_value === 'O' && cell_07_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet04();
            // Variables Ends here

        } else if(cell_02_value === 'O' && cell_05_value === 'O' && cell_08_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet05();
            // Variables Ends here

        } else if(cell_03_value === 'O' && cell_06_value === 'O' && cell_09_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet06();
            // Variables Ends here

        } else if(cell_01_value === 'O' && cell_05_value === 'O' && cell_09_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet07();
            // Variables Ends here

        } else if(cell_03_value === 'O' && cell_05_value === 'O' && cell_07_value === 'O'){

            // Default Starts here
                playerTwoWinner();
            // Default Ends here  

            // Variables Starts here
                disableSet08();
            // Variables Ends here

        }
        
    });

});

function disableSet01() {
    //1,2,3
    game_cell04.classList.add('loser');
    game_cell05.classList.add('loser');
    game_cell06.classList.add('loser');
    game_cell07.classList.add('loser');
    game_cell08.classList.add('loser');
    game_cell09.classList.add('loser');
}
function disableSet02() {
    //4,5,6
    game_cell01.classList.add('loser');
    game_cell02.classList.add('loser');
    game_cell03.classList.add('loser');
    game_cell07.classList.add('loser');
    game_cell08.classList.add('loser');
    game_cell09.classList.add('loser');
}
function disableSet03() {
    // 7,8,9
    game_cell01.classList.add('loser');
    game_cell02.classList.add('loser');
    game_cell03.classList.add('loser');
    game_cell04.classList.add('loser');
    game_cell05.classList.add('loser');
    game_cell06.classList.add('loser');
}
function disableSet04() {
    //1,4,7
    game_cell02.classList.add('loser');
    game_cell03.classList.add('loser');
    game_cell05.classList.add('loser');
    game_cell06.classList.add('loser');
    game_cell08.classList.add('loser');
    game_cell09.classList.add('loser');
}
function disableSet05() {
    //2,5,8
    game_cell01.classList.add('loser');
    game_cell03.classList.add('loser');
    game_cell04.classList.add('loser');
    game_cell06.classList.add('loser');
    game_cell07.classList.add('loser');
    game_cell09.classList.add('loser');
}
function disableSet06() {
    // 3,6,9
    game_cell01.classList.add('loser');
    game_cell02.classList.add('loser');
    game_cell04.classList.add('loser');
    game_cell05.classList.add('loser');
    game_cell07.classList.add('loser');
    game_cell08.classList.add('loser');
}
function disableSet07() {
    // 1,5,9
    game_cell02.classList.add('loser');
    game_cell03.classList.add('loser');
    game_cell04.classList.add('loser');
    game_cell06.classList.add('loser');
    game_cell07.classList.add('loser');
    game_cell08.classList.add('loser');
}
function disableSet08() {
    //3,5,7
    game_cell01.classList.add('loser');
    game_cell02.classList.add('loser');
    game_cell04.classList.add('loser');
    game_cell06.classList.add('loser');
    game_cell08.classList.add('loser');
    game_cell09.classList.add('loser');
}

function playerOneWinner(){
    // Default Starts here
        gameResult.classList.add('player1')
        gameResult.textContent = 'Player 1 is Winner - X';
        gameResult.append(refreshGame);
        
        let PlayAgainBtn = document.getElementById('playAgain');
        PlayAgainBtn.addEventListener('click', function(){
            window.location.reload();
        });
        
        gameNotfn.classList.remove('player1', 'player2');
        gameNotfn.classList.add('gameOver');
        gameNotfn.textContent = 'Game Over';
    // Default Ends here  
}
function playerTwoWinner(){
    // Default Starts here
        gameResult.classList.add('player2')
        gameResult.textContent = 'Player 2 is Winner - O';
        gameResult.append(refreshGame);
        
        let PlayAgainBtn = document.getElementById('playAgain');
        PlayAgainBtn.addEventListener('click', function(){
            window.location.reload();
        });
        
        gameNotfn.classList.remove('player1', 'player2');
        gameNotfn.classList.add('gameOver');
        gameNotfn.textContent = 'Game Over';
    // Default Ends here  
}
function gameDraw(){
    // Default Starts here

        gameResult.append(refreshGame);
        
        let PlayAgainBtn = document.getElementById('playAgain');
        PlayAgainBtn.addEventListener('click', function(){
            window.location.reload();
        });
        
        gameNotfn.classList.remove('player1', 'player2');
        gameNotfn.classList.add('gameOver');
        gameNotfn.textContent = 'Game Draw';
    // Default Ends here  
}