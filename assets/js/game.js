
//propmts the user to enter their robot's name.
var playerName = window.prompt("what is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

//log multiple values at once:
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto"

var enemyHealth = 50;

var enemyAttack = 12;

var fight = function() {

    //alert that the round is starting
    window.alert("Welcome to Robot Gladiators!");

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

        window.alert(playerName + " still has" + playerHealth + " health remaining.");
        
    }


    if (playerHealth > 0) {

        console.log("Your robot is still alive!");

    }
}

fight();
