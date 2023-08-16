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
                if(player.gameboard.placeUnplacedShip(j, i)){
                    currentMsg.textContent = `Ship placed at (${j}, ${i})`;
                    updateCells(gameboard, playerCells);
                }else{
                    currentMsg.textContent = 'Invalid placement, please choose another';
                };
                return;
            }else{
                currentMsg.textContent = 'All ships placed, play your turn!';
            }

            const msg = game.takeTurn(j, i, 2);
            if(msg === 'hit'){
                cell.style.backgroundColor = 'red';
                currentMsg.textContent = `Opponent has hit the player at (${j}, ${i})`;
            }else if(msg == 'miss'){
                cell.style.backgroundColor = 'gray';
                currentMsg.textContent = `Opponent has missed the player at (${j}, ${i})`;
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
        });
        opponentCells.appendChild(cell);
    }
}

while(opponentGameboard.hasUnplacedShips()){
    const randomX = getRandomInt(9);
    const randomY = getRandomInt(9)
    if(opponentGameboard.placeUnplacedShip(randomX, randomY)){
        var element = opponentCells.querySelector(`[data-x='${randomX}'][data-y='${randomY}']`);
        element.style.backgroundColor='green';
    };

}
updateCells(opponentGameboard, opponentCells);

function updateCells(gb, gridDiv){
    let cells = gridDiv.querySelectorAll('.cell');
    cells.forEach((cell) => {
        if (gb.grid[cell.getAttribute('data-y')][cell.getAttribute('data-x')].containsShip()){
            cell.style.backgroundColor = 'green';
        }
    });
}
