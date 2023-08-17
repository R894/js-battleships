const Ship = require('./ship');

class Game{
    constructor(player, opponent){
        this.player = player;
        this.opponent = opponent;
        this.currentTurn = 1;
        this.winner = null;
    }

    takeTurn(xCor,yCor, playerNumber){
        let message = null;
        if(playerNumber == 1 && !this.isOver()){
            if(this.currentTurn == 1 && !this.player.gameboard.hasUnplacedShips()){
                message = this.player.makeMove(xCor, yCor);
                this.currentTurn = 2;
            }
        }else if(playerNumber == 2 && !this.isOver()){
            if(this.currentTurn == 2){
                message = this.opponent.makeMove(xCor, yCor);
                this.currentTurn = 1;
            }
        }
        return message;
    }

    isOver(){
        if(this.player.gameboard.isGameOver()){
            this.winner = this.opponent.name;
            return true;
        }
        if(this.opponent.gameboard.isGameOver()){
            this.winner = this.player.name;
            return true;
        }
        return false;
    }
}

module.exports = Game;
