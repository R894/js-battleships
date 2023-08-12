class GameBoard{
    constructor(){
        this.grid = new Array(10).fill(null).map(() => new Array(10).fill(null));
        this.ships = [];
    }

    placeShip(ship){
        this.ships.push(ship);
        ship.getOccupiedCells().forEach(pos => {
            this.grid[pos.y][pos.x] = ship;
        });
    }

    recieveAttack(x,y){ 
        if(this.grid[y][x] !== null){
            this.grid[y][x].hit();
            this.grid[y][x] = 'hit';
        }else {
            this.grid[y][x] = 'miss';
        }
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
