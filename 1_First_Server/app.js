
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
    const id = 4 //need to be automated function for getting id;
    const student = {
        id: id,
        name: req.body.name
    }
    res.send(student)
})

//PUT methods - get an id and update that student

//DELETE Methods - get an id and delete that student 

app.listen(8080) //which port is used

