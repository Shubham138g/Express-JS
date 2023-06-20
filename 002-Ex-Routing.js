const express=require ("express");
const app=express();

app.get("/",(req,res)=>{  //app.get(route,callback_function)
   res.send("welcome to home page")  
})

app.get("/about",(req,res)=>{
    res.send("hello from about page")
})
app.get("/help",(req,res)=>{
    res.send("hello from help page")
})
app.get("/contact",(req,res)=>{
    res.send("hello from contact page")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is runnig on port number ${PORT}`)
})