const { response } = require("express")
const express = require("express")
const app = express()
const fetch = require('node-fetch')
//var path = require('path')
app.use(express.static(__dirname + ("/public")))
const PORT = process.env.PORT || 8080


// adding a script we can use the package.json file and and scripts key as a value we will need to be the commend line commend that we would like to exicute 
// process.env.PORT access the env PORT


console.log(__dirname); //globle object return where node running the file from

app.get('/', (req, res) => res.sendFile(__dirname + "/public/welcome/welcome.html"))

// path.join(__dirname, 'public', 'subject.html')

app.get('/dragons', (req, res) => res.sendFile(__dirname + "/public/dragons/dragons.html"))


app.get('/proxy', async (req, res) => {
    fetch("http://google.com").then(res => res.text()).then(body=> res.send(body))
    //console.log(response);
        

    })

app.get('/potato', (req, res)=>{
    if (req.query.value ==='spud'){
        return res.send({type: 'petite potato'})
    }     
    res.send({type: 'nothing'})    
})
    
app.get('/crypto', (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html")
})



const server = app.listen(PORT ,(err) => err? console.log(err) : console.log('Server build on port: ', Number(server.address().port)))
