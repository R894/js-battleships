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

player.setOpponentGameboard(opponentGameboard);
opponent.setOpponentGameboard(gameboard);

const game = new Game(player, opponent);

for(let i=0; i<=9; i++){
    for(let j=0; j<=9; j++){
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.setAttribute('data-x', j);
        cell.setAttribute('data-y', i);
        cell.addEventListener('click', () =>{
            if(player.gameboard.hasUnplacedShips()){
                player.gameboard.placeUnplacedShip(j, i);
                return;
            }

            const msg = game.takeTurn(j, i, 2);
            if(msg === 'hit'){
                cell.style.backgroundColor = 'red';
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
            }
        });
        opponentCells.appendChild(cell);
    }
}