// 1-deposit some money
// 2-determine number of lines to bet
// 3-collect a bet amount
// 4-spin the slot machine
// 5-check if the user won
// 6-give the user their winnings
// 7-play agin

const { count } = require("console");
const { link } = require("fs");
const { parse } = require("path");

const prompt=require("prompt-sync")();

const ROWS= 3;
const COLS= 3;

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
    const numberDepositAmount = parseFloat(depositAmount);   // numbers convert to float

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
    for(let i=0;i<COLS;i++){ // this one for every one reels we have 
        const reelSymbols =[...symbols]; //generate the available symbols
        for(let j=0;j<ROWS;j++){    //remove from them as we add symbols into each reel

            const randomIndex=Math.floor(Math.random()*reelSymbols.length) //nearest number
            const selectedSymbol= reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1); //removed symbol we selected
        }
    }
    return reels;


};

const transpose = (reels) =>{
    const rows =[];

    for(let i=0;i< ROWS;i++){
        rows.push([]); //every single raw we have to represent array
        for(let j=0;j<COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows;
}


const printRows= (rows) => {
    for(const row of rows){
        let rowString = "";
        for(const [i,symbol] of row.entries()){ // in here [i,symbol] 1,A / 2,B / 3,C
            rowString += symbol;
            if (i != row.length -1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
};

const getWinings = (rows, bet ,lines) => {
    let winnings = 0;

    for(let row=0; row < lines; row++){ //checking rows with lines
        const symbols = rows[row];
        let allSame = true;

        for(const symbol of symbols){ //loop every single symbols i have
            if(symbol != symbols[0]){ //sybols i ghave same as my o index symbol all same
                allSame = false;
                break;
            }
        }

        if(allSame){
            winnings += bet * SYMBOLS_VALUES[symbols[0]] // bet muliply by 5 value symbols

        }
    }

    return winnings;
}

const game =() =>{
let balance = deposit();//in here i use let cause constant veriable cant change value when we use let we can change value of it 
while(true){
    console.log("You have a balance of $" + balance);
    const numberOfLines=getNumberOfLines();
    const bet=getBet(balance,numberOfLines);
    balance -= bet * numberOfLines;
    const reels=spin();
    const rows=transpose(reels);
    printRows(rows);
    const winnings = getWinings(rows, bet, numberOfLines);
    balance +=winnings;
    console.log("You won , $" + winnings.toString())

    if(balance <=0){
        console.log("You ran out of Money !!");
        break;
    }

    const playAgain= prompt("Do you want to play again (y/n)?")
    if(playAgain != "y") break;
}

}

game();