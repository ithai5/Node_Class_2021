const express = require("express")
const app = express()
app.use(express.json()) //allow the body to be json file 


let plants = require('./plants.json').plants
console.log(plants)

let autoIncrement = Number(plants[plants.length-1].id) +1
const PORT = process.env.PORT || 8080
app.get('/plants', (req, res) => {
    res.send({plants})
})

app.get('/plants/:id', (req, res) => {
    res.send(plants.find((plant) => plant.id === Number(req.params.id)))
})

app.post("/plants", (req, res) => {
    const plant = req.body   
    plant.id = autoIncrement 
    plants.push(plant)
    res.send({data : plant})
})

app.patch("/plants/:id", (req, res) => {
    plants = plants.map((plant) => {
        if (plant.id === Number(req.params.id)){
            return {...plant, ...req.body, id : plant.id}
        }
        return plant
    })
    res.send({plants})

})

app.delete("/plants/:id", (req, res) => {
    console.log("hello there")
    plants = plants.filter(plant => plant.id !== Number(req.params.id))
    res.send({ })
})

app.listen(PORT, (err) => err? console.log(err) : console.log('Server is running on port: ', Number(PORT)))