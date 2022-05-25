//game states

//WIN: player has defeated all enemy robots

// * fight each robot until defeated

//LOSE: player health reaches 0 (or less)






//initializing all enemy variables 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemy) {
    
    while (enemy.health > 0 && playerInfo.health > 0) { 

        //prompts the user to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
    
        
        if (promptFight === "SKIP" || promptFight === "skip") {
        
            //warning confirmation for skipping
            var confirmSkip = window.confirm("There will be a penalty of 10g to skip this fight, are you sure you want to skip?");
            
            if (confirmSkip) {
                
                //confirms the skip and sybtracts the penalty
                window.alert(playerInfo.name + " has chosen to be a coward.");
                
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                
                console.log("playerMoney", playerInfo.money);

                break;
                
            }
            
        }
        
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //subtract the value of damage from enemy.health and update enemy.health
        enemy.health = Math.max(0, enemy.health - damage);
        //log the result to see if it worked
        
        console.log(playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage, " + enemy.name + " now has " + enemy.health + " health remaining.");
        
        
        if (enemy.health <= 0) {
            
            window.alert(enemy.name + " has died!");

            playerInfo.money = playerInfo.money + 20;

            break;
            
        } else {

            window.alert(enemy.name + " still has " + enemy.health + " health left.");

        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        //subtract the value of enemy.attack from playerInfo.health and update playerInfo.health
        playerInfo.health = Math.max(0, playerInfo.health - damage);enemyAttack
        
            //log the result to see if it worked
            
            console.log(
                enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage, " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
            
        
                if (playerInfo.health <= 0) {
            
                    window.alert(playerInfo.name + " has died!");

                    break;
            
                } else {

                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                
                }
            
    }
    
};

// function to start a new game
var startGame = function() {
    
    // resets stats.
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++){
        
        // checks if the player is still alive
        if (playerInfo.health > 0) {

            //calls out the round number
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            
            //moves through the enemy name array for each round
            var pickedEnemyObj = enemyInfo[i];
            
            //resets the enemy health to 50 for each new enemy
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // goes through the fight while loop using the next robot in the array.
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array.
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                
                // ask the player if they want to shop before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before next round?");

                //if yes take them to the store function
                if (storeConfirm) {

                    shop();

                }

            }
            
        } else {
            
            window.alert("You have lost your robot in battle! Game Over!");
            
            break;
            
        }
        
    }

    
    // play again.
    endGame();

};

var endGame = function() {

    // if the player is still alive they win
    if (playerInfo.health > 0){

        window.alert("Great job, you survived the game! you now have a score of " + playerMoney + ".");

    } else {

        window.alert("You've lost your robot in battle.");

    }

    // ask player if they want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){

        //restart the game
        startGame();

    } else {

        window.alert("Thank you for playing Robot Gladiators! Come back soon!");

    }

};
    
var shop = function() {

    var shopOptionPrompt = window.prompt( "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    //switch case for each option REFILL, UPGRADE, LEAVE.
    switch(shopOptionPrompt) {

        case "REFILL":
        case "refill":

            playerInfo.refillHealth();
       
            break;
        
        case "UPGRADE":
        case "upgrade":

            playerInfo.upgradeAttack();
            
            break;

        case "LEAVE":
        case "leave":

            window.alert("Leaving the store.");
            break;

        default: 

            window.alert("You did not pick a valid option, try again.");

            //call shop() function to make player choose again.
            shop();         
            break;
    
    }

};

var randomNumber = function(min, max) {

    var value = Math.floor(Math.random() * (max - min + 1) + min);


    return value;

};

//initializing all player values
var playerInfo = {

    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){

        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },

    refillHealth: function(){

        if (this.money >= 7) {

            window.alert("You have been healed by 20 for 7g.");

            this.health += 20;
            this.money -= 7;

        } else {

            window.alert("You don't have enough money");

        }

    },

    upgradeAttack: function(){

        if (this.money >= 7) {

            window.alert("Attack increased by 6 for 7g.");

            this.attack += 6;
            this.money -= 7;

        } else {

            window.alert("You don't have enough money");

        }



    },

  };

  var enemyInfo = [

    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },

    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },

    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }

  ];

// start the game when the page loads.
startGame();

