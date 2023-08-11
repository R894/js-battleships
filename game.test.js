const Game = require('./game');
const Player = require('./player');
const GameBoard = require('./gameboard');
const Ship = require('./ship');

test('Game loop lets players take turns', () =>{
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();

    const opponent = new Player('Opponent', opponentGameboard);
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);
    opponent.setOpponentGameboard(gameboard);

    const game = new Game(player, opponent);
    expect(game.currentTurn).toBe(1);
    game.takeTurn(1,2);
    expect(game.currentTurn).toBe(2);
    game.takeTurn(1,2);
    expect(game.currentTurn).toBe(1);
});

test('Game decides correct winner once the game is over', () =>{
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();

    const opponent = new Player('Opponent', opponentGameboard);
    const player = new Player('Player 1', gameboard);

    const game = new Game(player, opponent);

    player.setOpponentGameboard(opponentGameboard);
    opponent.setOpponentGameboard(gameboard);

    player.gameboard.placeShip(new Ship(2, 'horizontal', {x: 0, y: 0}));
    opponent.gameboard.placeShip(new Ship(2, 'horizontal', {x: 5, y: 5}));
    game.takeTurn(0, 0);
    game.takeTurn(0, 0);
    game.takeTurn(1, 0);
    game.takeTurn(1, 0);

    expect(game.isOver()).toBe(true);
    expect(game.winner).toBe('Player 1');

});