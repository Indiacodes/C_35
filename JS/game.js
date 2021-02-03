class Game{
     constructor(){

     }

     getGameState(){
          database.ref('gameState').on("value", (data)=> {
               gameState = data.val();
          });
     }

     updateGameState(state){
          database.ref('/').update({gameState : state});
     }

     start(){

          if(gameState === 0){
               player = new Player();
               player.getPlayerCount();
               
               form = new Form();
               form.display();
          }

     }

     play(){

     }

     end(){
          
     }
}