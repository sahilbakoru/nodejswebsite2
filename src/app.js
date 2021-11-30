const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const hbs = require("hbs")
const port = process.env.PORT || 8002;

const User= require("./models/usermessage");
const Newslet = require("./models/newsletter");
const { restart } = require("nodemon");
 require("./db/conn");

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");


app.use("/css",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


app.get("/", (req, res) => {
 res.render("index");
});



 app.post("/contact",(req,res)=>{
   const newUser= new User({
     name:req.body.name,
     email:req.body.email, 
     phone:req.body.phone, 
     message:req.body.message
   })
   newUser.save()
  res.redirect('/') 
 })

 app.post("/Newsleter",(req,res)=>{
  const news_sub= new Newslet({
    email:req.body.email
  })
  news_sub.save()
 res.redirect('/') 
})

app.listen(port);
