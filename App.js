const express =require ("express");
const app = express();

app.get("/",(req,res)=> {
     res.send("hello from the express js learning")
})

app.listen(8000, ()=>{
    console.log("server is runnig")
})