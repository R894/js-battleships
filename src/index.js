import './style.css';
const GameBoard = require('./gameboard');
const Player = require('./player');
const Game = require('./game');
const Ship = require('./ship');

const playerCells = document.querySelector('.player-grid');
const opponentCells = document.querySelector('.opponent-grid');

const gameboard = new GameBoard();
const opponentGameboard = new GameBoard();

const opponent = new Player('Opponent', opponentGameboard);
const player = new Player('Player 1', gameboard);

let currentMsg = document.querySelector('.msg');

player.setOpponentGameboard(opponentGameboard);
opponent.setOpponentGameboard(gameboard);

const game = new Game(player, opponent);

const dirBtn = document.querySelector('.dir button');

let dir = 'vertical';

dirBtn.addEventListener('click', () => {
    if(dir == 'horizontal'){
        dir = 'vertical';
        dirBtn.textContent = 'Dir: Y';
    }else{
        dir = 'horizontal';
        dirBtn.textContent = 'Dir: X';
    }
});


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for(let i=0; i<=9; i++){
    for(let j=0; j<=9; j++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.setAttribute('data-x', j);
        cell.setAttribute('data-y', i);
        cell.addEventListener('click', () =>{
            if(player.gameboard.hasUnplacedShips()){
                currentMsg.textContent = 'Place your ships';
                if(player.gameboard.placeUnplacedShip(j, i, dir)){
                    currentMsg.textContent = `Ship placed at (${j}, ${i})`;
                    updateCells(gameboard, playerCells);
                }else{
                    currentMsg.textContent = 'Invalid placement, please choose another';
                };
                return;
            }
        });
        playerCells.appendChild(cell);
    }
}

for(let i=0; i<=9; i++){
    for(let j=0; j<=9; j++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.setAttribute('data-x', j);
        cell.setAttribute('data-y', i);

        cell.addEventListener('click', (e) =>{
            const msg = game.takeTurn(j, i, 1);

            if(msg === 'hit'){
                cell.style.backgroundColor = 'red';
                currentMsg.textContent = 'Hit';
                currentMsg.textContent = `Player has hit the opponent at (${j}, ${i})`;
            }else if(msg == 'miss'){
                cell.style.backgroundColor = 'gray';
                currentMsg.textContent = `Player has missed the opponent at (${j}, ${i})`;
            }
            if(msg != null){
                let AIturn = game.takeTurn(getRandomInt(10), getRandomInt(10),2);
                updateCells(gameboard, playerCells);
            }
        });

        opponentCells.appendChild(cell);
    }
}

while(opponentGameboard.hasUnplacedShips()){
    const randomX = getRandomInt(10);
    const randomY = getRandomInt(10);
    const directions = ['horizontal', 'vertical'];
    opponentGameboard.placeUnplacedShip(randomX, randomY, directions[getRandomInt(2)]);
}

function updateCells(gb, gridDiv, showShips=true){
    let cells = gridDiv.querySelectorAll('.cell');
    cells.forEach((cell) => {
        if (gb.grid[cell.getAttribute('data-y')][cell.getAttribute('data-x')].containsShip() && showShips == true){
            cell.style.backgroundColor = 'green';
        }
        if(gb.grid[cell.getAttribute('data-y')][cell.getAttribute('data-x')].hit == true){
            cell.style.backgroundColor = 'gray';
        }
        if(gb.grid[cell.getAttribute('data-y')][cell.getAttribute('data-x')].hit == true && gb.grid[cell.getAttribute('data-y')][cell.getAttribute('data-x')].containsShip()){
            cell.style.backgroundColor = 'red';
        }
    });
}
