class Player{
     constructor(){

     }

     getPlayerCount(){
          database.ref('playerCount').on("value", (data)=> {
               playerCount = data.val();
          });
     }

     updatePlayerCount(count){
          database.ref('/').update({playerCount : count});
     }

     updatePlayerProfile(name){
          database.ref('players/player' + playerCount).set({playerName : name, Distance : 0});
     }
}