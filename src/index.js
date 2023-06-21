const path=require('path');
const express =require ("express");
const app = express();

const staticPath= path.join(__dirname,"../public");

//to set the view engine
app.set('view engine','hbs');

//template engine route
app.get("",(req,res)=>{
    res.render("index");
});


// app.use(express.static(staticPath));

app.get("/",(req,res)=> {
     res.send("hello from the express js learning")
})

app.listen(8000, ()=>{
    console.log("server is runnig")
})