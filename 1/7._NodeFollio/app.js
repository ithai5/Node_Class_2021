// node express setup
const express = require('express')
const app = express()

// node use different libraries
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

// import files
const projectsRoutes = require('./routes/projects')
const contactRoutes = require('./routes/contact')

app.use(projectsRoutes.router)
app.use(contactRoutes.router)


// create dynamic html files
const fs = require("fs")
const nav = fs.readFileSync(__dirname + "/public/nav/nav.html", "utf-8")
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8")
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html" , "utf-8")
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8")
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8")


app.get("/", (req,res) => {
    res.send(nav + frontpage + footer)
})

app.get("/projects", (req,res) => {
    res.send(nav + projects + footer)
})


app.get("/contact", (req,res) => {
    res.send(nav + contact + footer)
})

app.get("/test" , (req, res) => {
    res.send(footer + nav + nav )
})




const server = app.listen(process.env.PORT || 8080, (error) => {
    if(error) {
        console.log(eroor)
    }
    console.log("Server is running on port ", server.address().port)
})