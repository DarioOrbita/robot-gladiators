//game states

//WIN: player has defeated all enemy robots

// * fight each robot until defeated

//LOSE: player health reaches 0 (or less)




//initializing all player variables
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//initializing all enemy variables 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
   
    
    while (enemyHealth > 0 && playerHealth > 0) { 

        //prompts the user to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
    
        
        if (promptFight === "SKIP" || promptFight === "skip") {
        
            //warning confirmation for skipping
            var confirmSkip = window.confirm("There will be a penalty of 10g to skip this fight, are you sure you want to skip?");
            
            if (confirmSkip) {
                
                //confirms the skip and sybtracts the penalty
                window.alert(playerName + " has chosen to be a coward.");
                
                playerMoney = Math.max(0, playerMoney - 10);
                
                console.log("playerMoney", playerMoney);

                break;
                
            }
            
        }
        
        var damage = randomNumber(playerAttack - 3, playerAttack);

        //subtract the value of damage from enemyHealth and update enemyHealth
        enemyHealth = Math.max(0, enemyHealth - damage);
        //log the result to see if it worked
        
        console.log(playerName + " attacked " + enemyName + " for " + damage + " damage, " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        
        if (enemyHealth <= 0) {
            
            window.alert(enemyName + " has died!");

            playerMoney = playerMoney + 20;

            break;
            
        } else {

            window.alert(enemyName + " still has " + enemyHealth + " health left.");

        }

        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        //subtract the value of enemyAttack from playerHealth and update playerHealth
        playerHealth = Math.max(0, playerHealth - damage);
        
            //log the result to see if it worked
            
            console.log(
                enemyName + " attacked " + playerName + " for " + damage + " damage, " + playerName + " now has " + playerHealth + " health remaining."
            );
            
        
                if (playerHealth <= 0) {
            
                    window.alert(playerName + " has died!");

                    break;
            
                } else {

                    window.alert(playerName + " still has " + playerHealth + " health left.");
                
                }
            
    }
    
};

// function to start a new game
var startGame = function() {
    
    // resets stats.
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++){
        
        // checks if the player is still alive
        if (playerHealth > 0) {

            //calls out the round number
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            
            //moves through the enemy name array for each round
            var pickedEnemyName = enemyNames[i];
            
            //resets the enemy health to 50 for each new enemy
            enemyHealth = randomNumber(40, 60);
            
            // goes through the fight while loop using the next robot in the array.
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array.
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                
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
    if (playerHealth > 0){

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

            if (playerMoney <= 7){

                window.alert("Refilling player's health by 20 for 7g.");
    
                //increase health and decrease money.
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                
            } else {
                
                window.alert("You don't have enough money.");
                
            }
            
            break;
        
        case "UPGRADE":
        case "upgrade":

            if (playerMoney <= 7){
                
                window.alert("UPgrading player's attack by 6 for 7g.");
    
                // increase attack and decrease money.
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                
            } else {
                
                window.alert("You don't have enough money.");
            }
            
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

// start the game when the page loads.
startGame();

