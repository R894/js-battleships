class Cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.ship = null;
        this.hit = false;
    }

    containsShip(){
        return this.ship != null;
    }

    isHit(){
        return this.hit;
    }


    hitCell(){
        if(this.containsShip()){
            this.ship.hit();
        }
        this.hit = true;

        if(this.containsShip()){
            return "hit";
        }else{
            return "miss";
        }
    }

    addShip(ship){
        this.ship = ship;
    }

}
module.exports = Cell;