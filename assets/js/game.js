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


var fight = function(enemyName) {

    //alert that the round is starting
    window.alert("Welcome to Robot Gladiators!");

    while(enemyHealth > 0){

        //prompts the user to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
    
        //if the player decides to fight
        if (promptFight === "FIGHT" || promptFight === "fight") {
    
            //subtract the value of playerAttack from enemyHealth and update enemyHealth
            enemyHealth = enemyHealth - playerAttack;
            
            //log the result to see if it worked
            console.log(
                playerName + " attacked " + enemyName + " for " + playerAttack + " damage, " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
        /*
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
        
                window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
            }
        */
            //subtract the value of enemyAttack from playerHealth and update playerHealth
            playerHealth = playerHealth - enemyAttack;
        
            //log the result to see if it worked
            
            console.log(
                enemyName + " attacked " + playerName + " for " + enemyAttack + " damage, " + playerName + " now has " + playerHealth + " health remaining."
            );
            
        
         /*   if (playerHealth <= 0) {
        
                window.alert(playerName + " has died!");
        
            } else {
        
                window.alert(playerName + " now has " + playerHealth + " health remaining.");
                
            }
        */
            //if the player decides to skip
        } else if (promptFight === "SKIP" || promptFight === "skip"){
    
            //warning confirmation for skipping
            var confirmSkip = window.confirm("There will be a penalty of 2g to skip this fight, are you sure you want to skip?");
    
            if (confirmSkip) {
    
                    //confirms the skip and sybtracts the penalty
                    window.alert(playerName + " has chosen to be a coward.");
    
                    playerMoney = playerMoney - 2;
    
            //if not skipped, runs fight again
            } else { 
    
                fight();
    
            }
    
            //if the player enters an invalid answer
        } else {
    
            window.alert("Please choose a valid option, try again!");
    
        }

    }

}

for (var i = 0; i < enemyNames.length; i++){

    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;

    fight(pickedEnemyName);

}

