/* 
     Name: Sam Shepard
    Date Created: 9/18/18
    Most recent revision: 9/18/18
*/
var startingBet = 0;
var currentMoney = 0;
var winMoney = 4;
var loseMoney = 1;
var totalRolls = 0;
var maxMoney = 0;
var rollNumAtMax = 0;


//Check if we can run the game or not
function checkStart() {
    if (startingBet > 0) {
        return true;
    } else {
        alert("Error! This is not a high enough amount, please enter a number greater than 0.");
        return false;
    }
}

//Rolls 2 6-sided die
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
}


//Plays lucky seven game mechanic
function gameLoop() {
    currentMoney = startingBet;
    do {
        var diceAmt = rollDice();
        totalRolls = totalRolls + 1;
        if (diceAmt !== 7) {
            currentMoney = currentMoney - loseMoney;
        } else if (diceAmt == 7) {
            currentMoney = currentMoney + winMoney;
            if (currentMoney > maxMoney) {
                maxMoney = currentMoney;
                rollNumAtMax = totalRolls;
            }
        }
    } while (currentMoney > 0);

}



function startGame() {
    startingBet = document.getElementById("startAmt").value;
    currentMoney = 0;
    totalRolls = 0;
    maxMoney = 0;
    rollNumAtMax = 0;
    if (checkStart() === true) {
        gameLoop();
        document.getElementById("results").classList.add("visible");
    }
    document.getElementById("submit").innerText = "replay";
    document.getElementById("betAmt").innerText = "$ " + startingBet;
    document.getElementById("rollsTotal").innerText = totalRolls;
    document.getElementById("maxAmt").innerText = "$ " + maxMoney;
    document.getElementById("rollCountMax").innerText = rollNumAtMax;
}
