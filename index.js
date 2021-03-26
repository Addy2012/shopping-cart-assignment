const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
//Sets our app to use the handlebars engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,(suc,err)=>{
    console.log("server is listening at 3000");
})

app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/login",(req,res)=>{
    res.render('Login')
})

app.get("/register",(req,res)=>{
    res.render('Register')
})
app.get("/products",(req,res)=>{
    res.render('Products')
})
