const path=require('path');
const express =require ("express");
const app = express();

const staticPath= path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates");


//to set the view engine
app.set('view engine','hbs');
app.set("views",templatePath);

//template engine route
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about"); //here in double quote give the file name
});


// app.use(express.static(staticPath));

app.get("/",(req,res)=> {
     res.send("hello from the express js learning")
})

app.listen(8000, ()=>{
    console.log("server is runnig")
})