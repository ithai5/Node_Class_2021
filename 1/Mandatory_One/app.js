const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const notes = require('./notes.json').materials


app.use(express.static(__dirname + ("/public")))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'))


app.get('/materials', (req, res) => res.sendFile(__dirname + '/public/materials.html'))

app.get('/materials/:subject', (req, res) => {
    //needs to add check point if subject exist in the json file
    const subjectList = notes.find((note)=> note.subject)
        if(notes.filter((note) => note.subject ===req.params.subject).length>0){ // checks if there the parameter subject is exist
            res.sendFile(__dirname + '/public/subject.html')
        }
        else{    
            res.send({massage: "page not found"})
    }
} )

//api requsts should be part of another class


app.get('/api/materials', (req, res) => {
    res.send(notes)
})

app.get('/api/materials/:subject', (req, res) => {
    
    const subjectNotes = notes.find(note => note.subject === req.params.id)
    res.send(subjectNotes)
})





app.listen(PORT, (err) => err? console.log(err) : console.log('Server runs on port: ', Number(PORT)))