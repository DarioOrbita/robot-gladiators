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
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {

    //alert that the round is starting
   
    
    while (enemyHealth > 0 && playerHealth > 0) { 

        //prompts the user to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
    
        
        if (promptFight === "SKIP" || promptFight === "skip") {
        
            //warning confirmation for skipping
            var confirmSkip = window.confirm("There will be a penalty of 10g to skip this fight, are you sure you want to skip?");
            
            if (confirmSkip) {
                
                //confirms the skip and sybtracts the penalty
                window.alert(playerName + " has chosen to be a coward.");
                
                playerMoney = playerMoney - 10;
                
                console.log("playerMoney", playerMoney);

                break;
                
            }
            
        }
        
        //subtract the value of playerAttack from enemyHealth and update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        //log the result to see if it worked
        
        console.log(playerName + " attacked " + enemyName + " for " + playerAttack + " damage, " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        
        if (enemyHealth <= 0) {
            
            window.alert(enemyName + " has died!");

            playerMoney = playerMoney + 20;

            break;
            
        } else {

            window.alert(enemyName + " still has " + enemyHealth + " health left.");

        }
        //subtract the value of enemyAttack from playerHealth and update playerHealth
        playerHealth = playerHealth - enemyAttack;
        
            //log the result to see if it worked
            
            console.log(
                enemyName + " attacked " + playerName + " for " + enemyAttack + " damage, " + playerName + " now has " + playerHealth + " health remaining."
            );
            
        
                if (playerHealth <= 0) {
            
                    window.alert(playerName + " has died!");

                    break;
            
                } else {

                    window.alert(playerName + " still has " + playerHealth + " health left.");
                
                }
            
    }
    
}

// function to start a new game
var startGame = function(){
    
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
            enemyHealth = 50;
            
            // goes through the fight while loop using the next robot in the array.
            fight(pickedEnemyName);
            
        } else {
            
            window.alert("You have lost your robot in battle! Game Over!");
            
            break;
            
        }
        
    }

    
    // play again.
    endGame();

}

var endGame = function(){

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

}
    
// start the game when the page loads.
startGame();

