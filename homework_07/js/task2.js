var generalGuestion = confirm("Do you want to play a game?");
let userNumber;
let randomNumber;
var prize = 0;
let attems = 3;
let total = 0;
let possible = 10;
if (!generalGuestion) {
    console.log("You did not become a millionaire");
}
// first circle
else {
    randomNumber = Math.floor((Math.random() * 5) + 1);
    for (let i = 0; i < 3; i++) {

        userNumber = prompt("Enter a number from 0 to 5 inclusive" + "\n" +
            "Attempts left : " + attems + "\n" +
            "Total prize : " + prize + "$" + "\n" +
            "Possible price on current attempt : " + possible + "$");
        attems = --attems;
        possible = Math.floor(possible / 2);

        if (userNumber != randomNumber && attems == 0) {
            console.log("Your prize is: " + prize + "$. Do you want to play again?");
        } else if (userNumber == randomNumber) {
            switch (i) {
                case 0:
                    prize = 10;
                    break;
                case 1:
                    prize = 5;
                    break;
                case 2:
                    prize = 2;

            }
            generalGuestion = confirm("Do you want to continue a game?");
            break;
        }
    }
    if (!generalGuestion) {

        console.log("Thank you for a game. Your prize is " + prize + " $");
    }
    // second circle   
    else {
        if (prize > 0) {
            attems = 3;
            possible = 30;
            randomNumber = Math.floor((Math.random() * 10) + 1);
            for (let i = 0; i < 3; i++) {
                userNumber = prompt("Enter a number from 0 to 10 inclusive" + "\n" +
                    "Attempts left : " + attems + "\n" +
                    "Total prize : " + prize + "$" + "\n" +
                    "Possible price on current attempt : " + possible + "$");
                attems = --attems;
                possible = Math.floor(possible / 2);
                if (userNumber != randomNumber) {
                    console.log("Your prize is: " + prize + "$. Do you want to play again?");
                } else {
                    switch (i) {
                        case 0:
                            prize = 30;
                            break;
                        case 1:
                            prize = 15;
                            break;
                        case 2:
                            prize = 7;
                            break;
                    }
                    break;
                }
            }
        }
    }
}