// Load express Module
var express = require("express");
// Invoke express and store the result in the variable app
var app = express();
// Set static folder for html and css files.
app.use(express.static(__dirname + "/static"));
// Set location for ejs views
app.set('views', __dirname + '/views');
// Set ejs views engine
app.set('view engine', 'ejs');


// Cats GET Route using ejs views
app.get("/", function(request, response){
    response.render('cats');
})


app.get("/sleepy", function(request, response){
    var cat_array = [
        {name: "sleepy", food: "Cheeseburger", age: "4", sleep1: "by the fireplace", sleep2: "on the recliner"}
    ];
    response.render('details', {cat: cat_array});
})

app.get("/scaredy", function(request, response){
    var cat_array = [
        {name: "Scaredy", food: "Cheeseburger", age: "4", sleep1: "by the fireplace", sleep2: "on the recliner"}
    ];
    response.render('details', {cat: cat_array});
})

app.get("/bashful", function(request, response){
    var cat_array = [
        {name: "Bashful", food: "pizza", age: "2", sleep1: "under the couch", sleep2: "window sill"}
    ];
    response.render('details', {cat: cat_array});
})











app.listen(8000, () => console.log("listening on port 8000"));