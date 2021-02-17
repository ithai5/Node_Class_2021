const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extanded: true}))
let students = [
    {id: 1, name: "Itai"},
    {id: 2, name: "Mie"},
    {id: 3, name: "Nir"}

]

// GET Methodes
// GET all students
app.get("/students", (req, res) => {
    res.send({students: students})
})

// GET student by id
app.get("/students/:id", (req, res) => { // :something - can pass a value through the ip address
    res.send(students.find(student => student.id == req.params.id))
})

//POST Methods - add new item to the list, in that case it will be student
app.post("/students", (req, res) => {
    const id = 4 //need to be automated function for getting id;
    const student = {
        id: id,
        name: req.body.name
    }
    res.send(student)
})

//PUT methods - get an id and update that student

//DELETE Methods - get an id and delete that student 

app.listen(8080)

