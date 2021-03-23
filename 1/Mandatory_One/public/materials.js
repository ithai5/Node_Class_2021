$.getJSON('/api/materials', (data) => { //gets the json file as array
    data.forEach((e => {
        $("#materials-list").append(`<li><a href="/materials/${e.subject}">${e.subject}</a></li>`) 
        //creating list of the subjects and append it to the html tag id 
    }))
})