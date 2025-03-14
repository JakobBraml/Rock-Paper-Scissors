"use client";
import { useState } from "react";


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

<>
<div class="rps">
        
        <div class="row">
            <div>
                <label class="text">Make your selection:</label>
                <button class="btn" onclick="option('rock')">Rock</button>
                <button class="btn" onclick="option('paper')">Paper</button>
                <button class="btn" onclick="option('scissors')">Scissors</button>
                <button class="reset" onclick="wins('reset')">Reset</button> 
            </div>
        </div>
        <div class="row">
            <div class="you">
                <label class="yourchoice">You:</label>
                <span id="result-text1"></span>
            </div>
            <div class="computer">
                <label class="computerchoice">Computer:</label>
                <span id="result-text2"></span>
            </div>       
        </div>
        <div class="row">
            <div class="winner">
                <label class="outcome">Winner:</label>
                <span id="result-text"></span>
            </div>
        </div>
        <div class="row">
            <div class="wins">
                <label class="outcome">Wins:</label>
                <span class="result-text3"></span>
            </div>
            <div class="losses">
                <label class="outcome">Losses:</label>
                <span class="result-text4"></span>
            </div>
            <div class="ties">
                <label class="outcome">Ties:</label>
                <span class="result-text5"></span>
            </div>
        </div>
    </div>
</>
}
//test
//Use React useState instead of direct DOM manipulation (document.getElementById).
//proper event handlers with onClick={() => option("Rock")} instead of onclick="option('rock')" (which doesn’t work in React).
//State updates correctly, ensuring React re-renders the component when values change.
//Uses resetGame function to properly reset all states.