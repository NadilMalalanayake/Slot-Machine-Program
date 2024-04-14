// 1-deposit some money
// 2-determine number of lines to bet
// 3-collect a bet amount
// 4-spin the slot machine
// 5-check if the user won
// 6-give the user their winnings
// 7-play agin

const { count } = require("console");

// const { parse } = require("path");

// function deposit(){

// }

const prompt=require("prompt-sync")();
const Rows= 3;
const Cols= 3;
const SYMBOLS_COUNT={
    A: 2,    //real keys : Values
    B: 4,
    C: 6,
    D: 8
};

const SYMBOLS_VALUES={
    A: 5,   //multiply values
    B: 4,
    C: 3,
    D: 2,
};




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

        if(isNaN(numberOfLines) || numberOfLines < 0 || numberOfLines > 4){ 
            console.log("invalid number of lines, try again")
        }else{
            return numberOfLines;
        }
    }
}

const getBet = (balance,lines) => {  //to detemine maximum bet is
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberOfBet = parseFloat(bet);  

        if(isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines){ //check is it real number
            console.log("invalid bet, try again")
        }else{
            return numberOfBet;
        }
    }
}

const spin = () =>{
    const symbols = [];
    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)){ 
        for(let i=0; i<count; i++){
            symbols.push(symbol);   //push a new values to array
        }
    }

    
    const reels=[[],[],[]] //this nested array represent a column inside of spin
    for(let i=0;i<Cols;i++){ // this one for every one reels we have 
        const reelSymbols =[...symbols]; //generate the available symbols
        for(let j=0;j<Rows;j++){    //remove from them as we add symbols into each reel

            const randomIndex=Math.floor(Math.random()*reelSymbols.length) //nearest number
            const selectedSymbol= reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); //removed symbol we selected
        }
    }
    return reels;


};




let balance = deposit(); //in here i use let cause constant veriable cant change value when we use let we can change value of it 
const numberOfLines=getNumberOfLines();
const bet=getBet(balance,numberOfLines);
const reels=spin();



// console.log(depositAmount);