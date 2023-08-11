const GameBoard = require('./gameboard');
const Ship = require('./ship');

test('gameboard is initialized with a correct grid and empty ship list', () => {
    const gameboard = new GameBoard();
    expect(gameboard.grid.length).toBe(10);
    expect(gameboard.grid[0].length).toBe(10);
    expect(gameboard.ships).toEqual([]);

});

test('placing a ship on the gameboard updates the grid and ship list', () => {
    const ship = new Ship(3, 'horizontal',{x: 2, y: 5});
    const gameboard = new GameBoard();
    gameboard.placeShip(ship);

    expect(gameboard.ships).toEqual([ship]);
    expect(gameboard.grid[5][2]).toBe(ship);
    expect(gameboard.grid[5][3]).toBe(ship);
    expect(gameboard.grid[5][4]).toBe(ship);
});

test('recieving an attack updates the grid cell', () => {
    const ship = new Ship(3, 'horizontal',{x: 2, y: 5});
    const gameboard = new GameBoard();

    gameboard.placeShip(ship);
    gameboard.recieveAttack(2,5);
    expect(gameboard.grid[5][2]).toBe('hit');
});

test('recieving a missed attack updates the grid cell', () => {
    const gameboard = new GameBoard();

    gameboard.recieveAttack(5,2);

    expect(gameboard.grid[2][5]).toBe('miss');
});

test('gameboard correctly reports game over when all ships are sunk', () => {
    const gameboard = new GameBoard();
    const ship1 = new Ship(2, 'horizontal', { x: 0, y: 0 });
    const ship2 = new Ship(3, 'vertical', { x: 3, y: 4 });
    gameboard.placeShip(ship1);
    gameboard.placeShip(ship2);
  
    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();
  
    expect(gameboard.isGameOver()).toBe(true);
});
