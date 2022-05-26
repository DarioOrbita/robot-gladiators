//game states

//WIN: player has defeated all enemy robots

// * fight each robot until defeated

//LOSE: player health reaches 0 (or less)






//initializing all enemy variables 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

var getPlayerName = function() {

    var name = "";

    while(name === "" || name === null) {

        name = prompt("What is your robot's name")
    }

    console.log("Your robot's name is " + name);

    return name;

}

var fight = function(enemy) {
    
    while (enemy.health > 0 && playerInfo.health > 0) { 

        //asks player if they want to skip.
        if (fightOrSkip) {

            //if true (skip) then break the while loop
            break;

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

        window.alert("Great job, you survived the game! you now have a score of " + playerInfo.money + ".");

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

    name: getPlayerName(),
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

  var fightOrSkip = function() {

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //sets the entered prompt to fight into lowercase
    promptFight = promptFight.toLocaleLowerCase();

    if (promptFight === "skip") {

        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

            // Conditional Recursive Function Call
        if (!promptFight) {

            window.alert("You need to provide a valid answer! Please try again.");

            return fightOrSkip();

        }

        if (confirmSkip) {

            window.alert(playerInfo.name + " has decided to skip this fight. GIT GUD");

            //subtracts money for skipping without going negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);

            return true;

        }

        return false;

    }

}
// start the game when the page loads.
startGame();

