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

const getNumberOfLines= () => {
    while(true){
        const lines = prompt("Enter a number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);  

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >=3){ //check is it real number
            console.log("invalid number of lines, try again")
        }else{
            return numberOfLines;
        }
    }
}



const depositAmount = deposit(); //in here i use let cause constant veriable cant change value when we use let we can change value of it 
const numberOfLines=getNumberOfLines();
// console.log(depositAmount);