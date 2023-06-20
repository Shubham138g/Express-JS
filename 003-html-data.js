const express =require ("express");
const app = express();

app.get("/",(req,res)=> {
     res.write("<h1>hello from th learning<h1>");
     res.write("<h1>hello from the express js learning</h1>");
     res.send();
})
const port=3000;
app.listen(port, ()=>{
    console.log(`server is runnig on port number ${port}`)
})