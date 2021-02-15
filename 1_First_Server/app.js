const express = require("express")
const app = express()

let students = [
    {id: 1, name: "Itai"},
    {id: 2, name: "Mie"},
    {id: 3, name: "Nir"}

]

// GET Methodes
app.get("/students", (req, res) => {
    res.send({students: students})
})

app.get("/students/:id", (req, res) => { // :something - can pass a value through the ip address
    res.send(students.find(student => student.id == req.params.id))
    console.log(student.find(student =>))
})

//POST Methods

//PUT methods

//DELETE Methods

app.listen(8080)

