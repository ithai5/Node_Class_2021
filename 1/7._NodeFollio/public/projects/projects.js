
const divElement = document.getElementById("projects")
    fetch('/api/projects')
    .then(res =>  res.json())
        .then(data => data.projects.forEach(project => {
            const aTag = document.createElement('a')
            aTag.title = "githubLink"
            aTag.href = project.gitLink
            const projectDiv = document.createElement("div")
            projectDiv.classList.add("project")
            const title = document.createElement("h2")
            title.classList.add("project-title")
            const description = document.createElement("div")
            description.classList.add("project-description")
            title.innerText = project.title
            description.innerHTML = project.description
            projectDiv.appendChild(title)
            projectDiv.appendChild(description)
            const technologies = document.createElement("div")
            technologies.classList.add("technologies")
            projectDiv.appendChild(technologies)
            project.technologiesInvolve.forEach(tech => {
              const techDiv=document.createElement("div")
              techDiv.classList.add("project-tech")
              techDiv.innerHTML = tech
              technologies.appendChild(techDiv)
            })
            aTag.appendChild(projectDiv)
            divElement.appendChild(aTag)
    }))
