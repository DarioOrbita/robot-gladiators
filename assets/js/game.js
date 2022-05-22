
//initializing all player variables
var playerName = window.prompt("what is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//log multiple values at once:
console.log(playerName, playerHealth, playerAttack);

//initializing all enemy variables
var enemyName = "Roborto"

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {

    //alert that the round is starting
    window.alert("Welcome to Robot Gladiators!");

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

        if (enemyHealth <= 0) {
    
            window.alert(enemyName + " had died!");
        } else {
    
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
        }
    
        //subtract the value of enemyAttack from playerHealth and update playerHealth
        playerHealth = playerHealth - enemyAttack;
    
        //log the result to see if it worked
        console.log(
            enemyName + " attacked " + playerName + " for " + enemyAttack + " damage, " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        if (playerHealth <= 0) {
    
            window.alert(playerName + " had died!");
    
        } else {
    
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
            
        }
    
    
        if (playerHealth > 0) {
    
            console.log("Your robot is still alive!");
    
        }

        //if the player decides to skip
    } else if (promptFight === "SKIP" || promptFight === "skip"){

        //warning confirmation for skipping
        var confirmSkip = window.confirm("There will be a penalty of 2g to skip this fight, are you sure you want to skip?");

        if (confirmSkip) {

                //confirms the skip and sybtracts the penalty
                window.alert(playerName + " has cohsen to be a coward.");

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

fight();
