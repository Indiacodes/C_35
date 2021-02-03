var database;
var gameState = 0, playerCount;
var form, game, player;

function setup(){
    createCanvas(500,500);    

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        gameState = 1;
        game.updateGameState(gameState);
    }

    if(gameState === 1){
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}