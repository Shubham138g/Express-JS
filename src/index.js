const path=require('path');    //path is used to give the absolute path of the dir
const express =require ("express"); //to require express server
const app = express();   //to use express function
const hbs= require('hbs');
const port=8000; //to set the port number

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