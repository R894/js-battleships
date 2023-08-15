class Ship{
    constructor(len, dir, coords){
        this.length = len;
        this.direction = dir;
        this.position = coords;
        this.hits = 0;
    }

    hit(){
        console.log("hit");
        this.hits += 1;
        if(this.isSunk()){
            console.log("Ship has been sunk");
        }
    }

    isSunk(){
        return (this.hits >= this.length);
    }

    getOccupiedCells(){
        if(this.direction === 'horizontal'){
            let cells = [];
            for(let i = 0;i< this.length; i++){
                console.log(`GetOccupiedCells Coordinates: ${this.position.x +i}, ${this.position.y}`);
                const coordinate = {x: this.position.x +i, y: this.position.y};
                cells.push(coordinate);
            }
            return cells;
            
        }else{
            let cells = [];
            for(let i = 0;i< this.length; i++){
                if(this.position.y+i > 9){
                    console.log('Out of bounds, returning null');
                    return null;
                }
                console.log(`GetOccupiedCells Coordinates: ${this.position.x}, ${this.position.y+i}`)
                cells.push({x: this.position.x, y: this.position.y+i});
            }
            return cells;
        }
    }
}

module.exports = Ship;
