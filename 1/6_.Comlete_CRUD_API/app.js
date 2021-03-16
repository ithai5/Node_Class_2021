const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8080

let superheroes = require('./superheroes.json').superheroes //array with all the superheroes

let currentId = superheroes[superheroes.length-1].id // kind of auto increment id 



// GET all will be /superheroes/ and will return all superheroes
app.get("/superheroes", (req, res) => res.send({superheroes}))

// GET by id will be /superheroes/:id and will return a specific hero in return
app.get("/superheroes/:id", (req, res) => {
    superhero = superheroes.find(superhero => superhero.id === Number(req.params.id))
    superhero ? res.send(superhero) : res.send({message:`superhero id ${req.params.id} not found`})
})

// POST /superheroes will read the body of the requst and will add new superhero to the list
app.post("/superheroes", (req, res) => {
    const newSuperhero = req.body
    newSuperhero.id = ++currentId 
    superheroes.push(newSuperhero)
    res.send({newSuperhero})
})

//patch /superheroes/:id will get a specific id and will update the superhero
app.patch("/superheroes/:id", (req, res) => {
    let index = 0 
    let updatedIndex // used for reciving the index of the updated item
    superheroes = superheroes.map(superhero => {
        if(superhero.id === Number(req.params.id)){
            updatedIndex = index-1
            return{...superhero, ...req.body, id : superhero.id}
        }
        return superhero
    }
    )
    res.send(superheroes[updatedIndex])

})
//delete /superheroes/:id will delete a specific superheroe
app.delete("/superheroes/:id", (req, res) => {
    superheroes = superheroes.filter(superhero=> superhero.id !== Number(req.params.id))
    res.send({})
})


app.listen(PORT, (err) => err? console.log(err) : console.log('Serve on Port:', Number(PORT)))