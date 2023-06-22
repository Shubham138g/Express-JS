const path=require('path');
const express =require ("express");
const app = express();
const hbs= require('hbs');
const port=8000;

const staticPath= path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials")


//to set the view engine
app.set('view engine','hbs');
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


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


//how to display 404 page to user
app.get("/about/*",(req,res)=>{
    res.render("404",{
        error:"opps page not found in about page"
    })
})


app.get("*",(req,res)=>{
    res.render("404",{
        error:"opps page not found"
    })
})

app.listen(port, ()=>{
    console.log(`server is runnig on ${port}`)
})