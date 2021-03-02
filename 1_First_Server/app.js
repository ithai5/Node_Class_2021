
//when creating the npm project we need to create package.json project and include {}
const express = require("express") //save it in a vairable so we can continue to work with it
const app = express() //using it instant of the server


//nodemon - let you run the server as the file get updated

app.use(express.json()) //allow the body to be json file 
app.use(express.urlencoded({ extanded: true})) 
let students = [
    {id: 1, name: "Itai"},
    {id: 2, name: "Mie"},
    {id: 3, name: "Nir"}
]

// GET Methodes -defiend 
app.get("/", (req, res) =>{ //a route 
res.send("<h1>Welcome to the AMAZING API</h1>")
})

app.get("/welcome", (req, res) =>{
    res.send("<h1>Welcome to the AMAZING API</h1>")
})

app.get("/me", (req, res) => {
    res.send({
        name: "itai",
        age: "26",
        from: "Israel",
        address: "around the globe",
        hobbies: ["basketball", "coding"],
        date: Date(day)
    })
})

// GET all students
app.get("/students", (req, res) => {
    res.send({students: students}) 
})

// GET student by id
app.get("/students/:id", (req, res) => { // :something - can pass a value through the ip address
    res.send(students.find(student => student.id === Number(req.params.id)))
})

//POST Methods - add new item to the list, in that case it will be student
app.post("/students", (req, res) => {
    newStudent = req.body
    newStudent.id = students[students.length -1].id +1 //kind of automated function for getting id;
    students.push(newStudent)
    res.send(newStudent)
})

//PUT methods - get an id and update that student

app.put("/students/:id", (req, res) => {
    const studentForUpdate = students.find(student => student.id === Number(req.params.id))
    const newInfoObject = req.body
    const keysList = Object.keys(newInfoObject)
    keysList.forEach((key) => studentForUpdate[key] = newInfoObject[key]) //adds new keys or update old values
    res.send({"student updated: ": studentForUpdate})
})

//DELETE Methods - get an id and delete that student 

app.delete("/students/:id", (req, res) => {
    const indexToDelete = students.indexOf(students.find(student => student.id === Number(req.params.id)))
    console.log(indexToDelete)
    students.splice(indexToDelete,1)
    res.send({})
})

app.listen(8080) //which port is used

