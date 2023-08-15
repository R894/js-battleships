const Ship = require('./ship');
const Cell = require('./cell');

class GameBoard{
    constructor(){
        this.grid = this.initializeGrid();
        this.ships = [];
        this.unplacedShips = [4,3,3,2];
    }

    initializeGrid(){
        const grid = [];
        for(let i =0; i<10; i++){
            const row = [];
            for(let j=0; j<10; j++){
                row.push(new Cell(i,j));
            }
            grid.push(row);
        }
        return grid;
    }

    placeShip(ship){
        if(ship.getOccupiedCells() == null){
            return false;
        }

        for (const pos of ship.getOccupiedCells()) {
            if (this.grid[pos.y][pos.x].containsShip()) {
                console.log(`${pos.y}, ${pos.x} contains a ship, returning false`);
                return false;
            }
        }

        this.ships.push(ship);
        ship.getOccupiedCells().forEach(pos => {
            this.grid[pos.y][pos.x].addShip(ship);
        });
        return true;
    }

    hasUnplacedShips(){
        return this.unplacedShips.length != 0;
    }

    placeUnplacedShip(xCor, yCor){
        if(this.hasUnplacedShips()){
            console.log(`passing LENGTH: ${this.unplacedShips[0]} X: ${xCor} Y: ${yCor}`);
            const ship = new Ship(Number(this.unplacedShips[0]),'vertical', {x: parseInt(xCor), y: parseInt(yCor)});
            if(ship.getOccupiedCells != null){
                if(this.placeShip(ship)){
                    this.unplacedShips.shift();
                    console.log("shifted");
                }
            }
        }
    }

    recieveAttack(x,y){ 
        if(this.grid[y][x].isHit()){
            return;
        }
        return this.grid[y][x].hitCell();
    }

    isGameOver(){
        this.ships.forEach((ship) => {
            if(!ship.isSunk()){
                return false;
            }
        });
        return true;
    }
}

module.exports = GameBoard;
