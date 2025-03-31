//three options rock paper scissors
//play aganist the computer
//click your option and hit submit
//computer then will display computer choice
//saying if you won or not
//keeps track of wins on a counter
const youResultText = document.getElementById("result-text1");
const computerResultText = document.getElementById("result-text2");
const resultResultText = document.getElementById("result-text");
const winResultText = document.getElementsByClassName("result-text3")[0];
const lossResultText = document.getElementsByClassName("result-text4")[0];
const tieResultText = document.getElementsByClassName("result-text5")[0];

let you = 0;
let computer = 0;
let result = 0;
let win = 0;
let loss = 0;
let tie = 0;

function option(choice) {
    if (choice === "rock") {
        you = "Rock";
    }
    else if (choice === "paper") {
        you = "Paper";
    }
    else if (choice === "scissors") {
        you = "Scissors";
    }

    youResultText.innerHTML = you;
    random();//used to run random function when function option is triggered 
    winner();//used to run winner function when function option is triggered
    wins();
}

function random() {
    const computerChoice = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * computerChoice.length);
    computer = computerChoice[randomIndex];

    computerResultText.innerHTML = computer;
}

function winner() {
    if (you === computer) {
        result = "Tie";
}
    else if ((you === "Rock" && computer === "Paper") ||
            (you === "Paper" && computer === "Scissors") ||
            (you === "Scissors" && computer === "Rock")) {
            result = "Computer";
}
    else {
        result = "You";
    }

    resultResultText.innerHTML = result;
}

function wins(reset) {
    if (result === "You") {
        win++;
    }
    else if (result === "Computer") {
        loss++;
    }
    else if (result === "Tie") {
        tie++;
    }


    if (reset === "reset") {
        you = "";
        computer = "";
        result = "";
        win = 0;
        loss = 0;
        tie = 0;
    }
    

    youResultText.innerHTML = you;
    computerResultText.innerHTML = computer;
    resultResultText.innerHTML = result;
    winResultText.innerHTML = win;
    lossResultText.innerHTML = loss;
    tieResultText.innerHTML = tie;

}


