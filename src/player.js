const GameBoard = require('./gameboard');


class Player{
    constructor(name, gameboard){
        this.gameboard = gameboard;
        this.name = name;
        this.opponentGameboard;
    }

    makeMove(x,y){
        this.opponentGameboard.recieveAttack(x,y);
    }

    setOpponentGameboard(gameboard){
        this.opponentGameboard = gameboard;
    }

    hasWon(){
        return this.opponentGameboard.isGameOver();
    }
}

module.exports = Player;
