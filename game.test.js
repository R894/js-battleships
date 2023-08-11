const Game = require('./game');
const Player = require('./player');
const GameBoard = require('./gameboard');

test('Game loop lets players take turns', () =>{
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();

    const opponent = new Player('Opponent', opponentGameboard);
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);
    opponent.setOpponentGameboard(gameboard);

    const game = new Game(player, opponent);
    expect(game.currentTurn()).toBe(1);
    game.takeTurn({x: 1,y: 2});
    expect(game.currentTurn()).toBe(2);
    game.takeTurn({x: 1,y: 2});
    expect(game.currentTurn()).toBe(1);
});

test('Game decides correct winner once the game is over', () =>{
    const gameboard = new GameBoard();
    const opponentGameboard = new GameBoard();

    const opponent = new Player('Opponent', opponentGameboard);
    const player = new Player('Player 1', gameboard);

    player.setOpponentGameboard(opponentGameboard);
    opponent.setOpponentGameboard(gameboard);

    player.gameboard.placeShip(2, 'horizontal', {x: 0, y: 0});
    opponent.gameboard.placeShip(2, 'horizontal', {x: 5, y: 5});
    game.takeTurn({x: 0, y: 0});
    game.takeTurn({x: 0, y: 0});
    game.takeTurn({x: 1, y: 0});
    game.takeTurn({x: 1, y: 0});

    expect(game.isOver()).toBe(true);
    expect(game.winner()).toBe('Player 1');

});