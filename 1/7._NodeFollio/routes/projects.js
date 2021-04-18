const router = require('express').Router() //an object the contain the route functionality without creating a new app

 
const projects = [
        {
            title: "Protfolio",
            technologiesInvolve: ["node.js", "html", "css", "javaScript"],
            gitLink: "String",
            description: "You are currently look inside my protfolio website",
            picture: "String"
        },

        {
            title: "NodeFolio",
            technologiesInvolve: ["node.js", "html", "css", "javaScript"],
            gitLink: "String",
            description: "this is protfolio project",
            picture: "String"
        },
    ]



router.get("/api/projects", (req, res) => {
    res.send({ projects })
})
module.exports = {
    router: router
} // a varb to sign a value to 

