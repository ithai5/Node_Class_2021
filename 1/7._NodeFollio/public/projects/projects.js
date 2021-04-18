//const { response } = require("express");
const divElement = document.getElementById("projects")

    fetch('/api/projects')
    .then(res =>  res.json())
        .then(data => data.projects.forEach(project => {
          console.log(project)  
        //   divElement.innerHTML(`<h1>${element.title}</h1> <div>${element.description} </div>`)
            const projectDiv = document.createElement("div")
            const projectTitle = document.createElement("h2")
            const projectDescription = document.createElement("div")
            projectTitle.innerText = project.title
            projectDescription.innerHTML = project.description
            projectDiv.appendChild(projectTitle)
            projectDiv.appendChild(projectDescription)
            divElement.appendChild(projectDiv)

    }))



        