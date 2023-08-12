class Game{
    constructor(player, opponent){
        this.player = player;
        this.opponent = opponent;
        this.currentTurn = 1;
        this.winner = null;
    }

    takeTurn(xCor,yCor){
        if(this.currentTurn == 1){
            this.player.makeMove(xCor, yCor);
            this.currentTurn = 2;
        }else{
            this.opponent.makeMove(xCor, yCor);
            this.currentTurn = 1;
        }
    }

    isOver(){
        if(this.player.gameboard.isGameOver()){
            this.winner = this.player.name;
            return true;
        }
        if(this.opponent.gameboard.isGameOver()){
            this.winner = this.opponent.name;
            return true;
        }
        return false;
    }


}
module.exports = Game;