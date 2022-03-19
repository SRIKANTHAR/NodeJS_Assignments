const express = require("express");
const app = express();

const user = require("./model/user");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/assignment_4');

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

var bodyParser = require("body-parser");
const async = require("quixote/vendor/async-1.4.2");
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
//const facker = require("faker");

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");



app.get("/", async (req, res) =>{
    const users = await user.find();
    res.render("index.ejs", {users});
})


app.get("/form", (req, res) =>{
    res.render("form.ejs");
})

app.post("/user/add", async (req, res) =>{
   
   // console.log(req.body);
   const {full_name, email, age, city, profession, isPromoted}  = req.body;
   await user.create({
       full_name,
       email,
       age,
       city,
       profession,
       isPromoted
   });
    res.redirect("/");

})


app.put("/user/:id", async (req, res) =>{
   
    await user.updateOne({_id: req.params.id},[
        {$set: {isPromoted: {$not: "$isPromoted"}}}
    ]);
     res.redirect("/");
 
 })


 app.delete("/user/:id", async (req, res) =>{
   
    await user.deleteOne({_id: req.params.id});
     res.redirect("/");
 
 })
 

app.listen(3000, () =>{
    console.log("Server is running.....");
})