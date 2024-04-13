// 1-deposit some money
// 2-determine number of lines to bet
// 3-collect a bet amount
// 4-spin the slot machine
// 5-check if the user won
// 6-give the user their winnings
// 7-play agin

const { parse } = require("path");

// function deposit(){

// }

const prompt=require("prompt-sync")();

const deposit=() =>{
    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);   // double numbers convert to float

    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){ //check is it real number
        console.log("invalid deposit amount, try again")
    }else{
        return numberDepositAmount;
    }
}

};

const depositAmount = deposit();
console.log(depositAmount);