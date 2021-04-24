const router = require('express').Router() //an object the contain the route functionality without creating a new app

 
const projects = [
        {
            title: "Portfolio",
            technologiesInvolve: ["node.js", "html", "css", "javaScript"],
            gitLink: "https://github.com/ithai5/Node_Class_2021/tree/main/1/7._NodeFollio",
            description: "You are here already!",
            picture: "String"
        },

        {
            title: "Student Social Media",
            technologiesInvolve: ["Angular", "JavaScript", "css"],
            gitLink: "String",
            description: "This project is a part of KEA class in Angular. Creating a social media for students where they can intercate with each other and with there classes and activities",
            picture: "String"
        },
        {
            title: "World of Tanks Royal",
            technologiesInvolve: ["VueJS","CSS", "HTML"],
            gitLink:"https://git.doebl.eu/springfrosch/rt-frontend",
            description: "Front-end appliction for World of Tanks. Helps players to communcate with each other and organize their gamming groups",
            picture:""
        },
        {
            title:"D&A Kosher",
            technologiesInvolve:["React", "Java", "MySQL", "Spring"],
            gitLink:"https://github.com/ithai5/dandakosher-frontend",
            description: "A full web application, used for a company to sell their "
        },
        {
            title:"Nordic Motorhome",
            technologiesInvolve:["Java", "Spring Boot", "html", "CSS", "MySQL"],
            gitLink:"https://github.com/ithai5/Nordic-Motorhome",
            description: "Part of my school work, a full web application, implament self created booking system"
        }
    ]



router.get("/api/projects", (req, res) => {
    res.send({ projects })
})
module.exports = {
    router: router
} // a varb to sign a value to 

