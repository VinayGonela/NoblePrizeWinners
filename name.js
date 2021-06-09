// program to search the winner by giving FirstName as input. for example, I have given Arthur
const prize = require("./prize.json")

function winner(search_data){
    newArray= prize.prizes.filter((a)=>{
        return a.laureates.filter((b)=> b.firstname == search_data)
    
    })
    return newArray
}

console.log(winner('Arthur')) // here we can give any first name as input

// To run the code, go to terminal choose file location and type node name.js