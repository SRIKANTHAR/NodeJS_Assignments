const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser())
const facker = require("faker");

app.set("views", "./views");
app.set("view engine", "ejs");


var users = [];

for (let i=0; i<5; i++){
    users.push({
        full_name : facker.name.findName(),
        email : facker.internet.email(),
        age : i+40,
        city : facker.address.city(),
        profession : facker.name.jobTitle()
    })
}
//console.log(users);


app.get("/", (req, res) =>{
    res.render("index.ejs", {users});
})


app.get("/form", (req, res) =>{
    res.render("form.ejs");
})

app.post("/user/add", (req, res) =>{
    //console.log(users);
   // console.log(req.body);
    users.push(  {
        full_name: req.body.full_name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
        profession: req.body.profession
      });
    
    res.redirect("/");

})

app.listen(3000, () =>{
    console.log("Server is running.....");
})