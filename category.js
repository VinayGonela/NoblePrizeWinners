// program to search the winner by giving Category as input. for example i have given chemistry
const prize = require("./prize.json")

function winner(search_data){
    newArray= prize.prizes.filter((a)=>{
        return a.category == search_data;
    
    })
    return newArray
}

console.log(winner('chemistry')) // here we can any category like chemistry, physics,medicine, peace etc.. as inputs

// To run the code, go to terminal choose file location and type node category.js