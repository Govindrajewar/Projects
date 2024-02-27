// BattleShip Game :
/**
 * 1 means that the battleship is available.
 * 0 means that the battleship is not available.
 */


let array       = [0, 1, 1, 0, 1];
let guessCount  = 0 ;
let hitCount    = 0 ;
let input       = 0 ;

// checkGuess();

function checkGuess(){
    input = Number(prompt("Guess the Position of BattleShip: "));

    // Condition to stop the Game:
    if(input == 0){
        return;
    }

    // Condition to Check invalid input:
    if (input > 5 || input < 1){
        alert("Enter a valid number");
        checkGuess();
    }


    let index = input - 1;

    if (array[index] == 1){
        increaseCounter(1);
        alert("You have hit a battleship");
        checkGuess();
    } else {
        increaseCounter(0);
        alert("You missed the battleship");
        checkGuess();
    }

}


function increaseCounter(counter){
    if(counter == 1){
        console.log("counter == 1");
        document.getElementById('gsCount').innerText = ++guessCount;
        document.getElementById('htCount').innerText = ++hitCount;
    }
    else{
        document.getElementById('gsCount').innerText = ++guessCount;
    }

}