const GameBoard = require('./gameboard');
const Player = require('./player');
const Ship = require('./ship');

test('player is initialized with a name and a gameboard', () => {
    const gameboard = new GameBoard();
    const player = new Player('Player 1', gameboard);

    expect(player.gameboard).toBe(gameboard);
    expect(player.name).toBe('Player 1');
});

test('player missed move and on opponents gameboard', () => {
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);

    player.makeMove(3,5);
    expect(opponentGameboard.grid[5][3]).toBe('miss');
});

test('player successful move updates opponent gameboard', () => {
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);

    opponentGameboard.placeShip(new Ship(3, 'horizontal', {x: 0, y:0}));

    player.makeMove(0,0);

    expect(opponentGameboard.grid[0][0]).toBe('hit');
});

test('detects when all enemy player ships are sunk', () => {
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);

    opponentGameboard.placeShip(new Ship(3, 'horizontal', {x: 0, y:0}));

    player.makeMove(0,0);
    player.makeMove(1,0);
    player.makeMove(2,0);

    expect(player.hasWon()).toBe(true);
});
