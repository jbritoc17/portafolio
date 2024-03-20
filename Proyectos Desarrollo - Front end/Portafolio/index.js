const express = require("express")

const path = require("path")

let app = express();
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("se escucha en http://localhost:3000/");
})

app.get("/",(req,res)=>{
    let index = path.join(__dirname,"./views/index.html")
    res.sendFile(index)
})

app.get("/aboutMe",(req,res)=>{
    let about = path.join(__dirname,"./views/aboutMe.html")
    res.sendFile(about)
})