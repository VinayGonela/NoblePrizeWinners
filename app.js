const { json } = require("express");
const express = require("express");
const fs = require('fs');
const app = express();

// api th get the data by giving year as input
app.get('/searchByYear', (req, res) => {
    let year = req.query.year;
    // Read users.json file
    fs.readFile("prize.json", function (err, data) {
        // Converting to JSON
        const winner = JSON.parse(data);
        //let Array=[];
        let arr = winner.prizes
        
        arr = arr.filter((item)=>{
            return item.year == year
        });
        console.log(arr)
        res.json(arr)
    })
}) // ex:- give input as http://localhost:5000/searchByYear?year = 1997


// api to search the data by year and category
app.get('/searchByCategory&Year', (req, res) => {
    let category = req.query.category;
    let year= req.query.year;
   // let category.year=req.query.category.year;
    // Read users.json file
    fs.readFile("prize.json", function (err, data) {
        // Converting to JSON
        const winner = JSON.parse(data);
        //let Array=[];
        let arr = winner.prizes
        
        arr = arr.filter((item)=>{
            return item.year == year & item.category == category;
        });
        console.log(arr)
        res.json(arr) //ex:- give input as http://localhost:5000/searchByCategory&Year?category=peace&year=2016
    })
})

// api to get the data based on name
app.get('/searchByName', (req, res) => {
    let name = req.query.name;
    // Read users.json file
    fs.readFile("prize.json", function (err, data) {
        // Converting to JSON
        const winner = JSON.parse(data);
        //let Array=[];
        let arr = winner.prizes;
         
        var newArray = arr.map((a)=>{

            return {...a, laureates: a.laureates.filter((laureate)=> laureate.firstname == name)}
        })
    
      console.log(newArray)
        
        res.send(newArray)
        
        }) 
    }) // ex:- give input as http://localhost:5000/searchByName?name = Arthur



  // api to get the in ascending order, year-wise
    app.get('/searchByAscendingOrder', (req, res) => {
       
        // Read users.json file
        fs.readFile("prize.json", function (err, data) {
            // Converting to JSON
            const winner = JSON.parse(data);
            //let Array=[];
            let arr = winner.prizes;

            arr=arr.sort(function(a, b){
                return a.year - b.year;
            });
            console.log(arr)
            
            res.send(arr)
            });
        
            }) //give input as http://localhost:5000/searchByAscendingOrder
        

app.listen("5000", () => {
    console.log("server is connected");
}) 

// to run the entire program type:- nodemon app.js