const express=require("express");
const app = express();
const port =8000;


app.get("/",(req,res)=>{
    res.send("hello from the index page");
})
app.get("/about",(req,res)=>{
    res.write("<h1>hello from the about page</h1>");
    res.send();
})

app.listen(port,()=>{
    console.log(`server isrunnig on ${port}`)
})