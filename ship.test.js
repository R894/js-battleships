const Ship = require('./ship');

test('ship is initialized with correct length, direction, and position', () => {
    const ship = new Ship(3, 'horizontal', {x: 5, y:2});
    expect(ship.length).toBe(3);
    expect(ship.direction).toBe('horizontal');
    expect(ship.position).toEqual({x:5, y:2});

});

test('ship reports sunk status after taking hits equal to its length', () => {
    const ship = new Ship(3, 'horizontal', {x: 5, y:2});
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('ship occupies correct cells when placed horizontally', () => {
    const ship = new Ship(3, 'horizontal', {x: 2, y:3});
    expect(ship.getOccupiedCells()).toEqual([
        {x: 2, y: 3},
        {x: 3, y: 3},
        {x: 4, y: 3}
    ]);
});

test('ship occupies correct cells when placed vertically', () => {
    const ship = new Ship(3, 'vertical', {x: 2, y:3});
    expect(ship.getOccupiedCells()).toEqual([
        {x: 2, y:3},
        {x: 2, y:2},
        {x: 2, y:1}
    ]);
});

//assuming board is 10 by 10
test('ship correctly handles placement at board edge', () => {
    const ship = new Ship(2, 'horizontal', {x: 8, y:0});

    expect(ship.getOccupiedCells()).toEqual([
        {x: 8, y:0},
        {x: 9, y:0}
    ]);
});

