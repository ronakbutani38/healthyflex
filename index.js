const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

app.get("/users",(req,res)=>{
    res.json(users);
})
app.get("/api/users",(req,res)=>{
    
})
app.listen(port,()=>{
    console.log(`Server Strated in port :${port}`);
})
