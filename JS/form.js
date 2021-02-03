class Form {
     constructor(){

     }

     display(){
          strokeWeight(5);
          var greetings = createElement('h2');
          var input = createInput('Please enter your name');
          input.position(250,190);
          var button = createButton('Join Game');
          button.position(250, 250);
          text('Welcome to the car racing game', 250, 150);
          button.mousePressed(() => {
               input.hide();
               button.hide();

               playerCount += 1;
               player.updatePlayerCount(playerCount);
               player.updatePlayerProfile(input.value());

               greetings.html("Hello " + input.value() + " please wait until other players join");
               greetings.position(250, 390);
          });
     }
}