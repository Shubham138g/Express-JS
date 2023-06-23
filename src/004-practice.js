const express=require("express");
const app = express();
const port =8000;


app.get("/",(req,res)=>{
    res.send("hello from the index page")
})

app.listen(port,()=>{
    console.log(`server isrunnig on ${port}`)
})