const prize = require("./prize.json")
// program to search the winner by giving year as input. for example i have given 2018
function winner(search_data){
    newArray= prize.prizes.filter((a)=>{
        return a.year == search_data;
    
    })
    return newArray
}


console.log(winner(2018)) // here we can type any year as input to listout who has won Noble Prize in a particular year.

// To run the code, go to terminal choose file location and type node year.js