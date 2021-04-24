const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080


app.get("/",(req,res)=>{
    res.send({message: "hello there"})
})

app.get("/movies", (req,res)=>{
    const movies
    res.send(movies)
})





const server = app.listen(PORT ,(err) => err? console.log(err) : console.log('Server build on port: ', Number(server.address().port)))
