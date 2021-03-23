let notes
const subject = window.location.href.match("/materials/(.*)")[1]

$.getJSON('/api/materials', (data) => { //gets the json file as array
    data.find((pageSubject) => {
         if (pageSubject.subject === subject){ //if the notes are the same as the subject it will
             notes = pageSubject.notes
             $("#materials-list").append(`<li class="selected"><a href="/materials/${pageSubject.subject}">${pageSubject.subject}</a></li>`)
         }else{         
             $("#materials-list").append(`<li><a href="/materials/${pageSubject.subject}">${pageSubject.subject}</a></li>`)
        }
     })
     notes.forEach((note, i) => {//creating the note information inside the #notes
         $("#notes").append(
             `<div class="note">
                <div class="title">${note.title}</div> 
                <div class="description">${note.description}</div> 
                <div class="examples">
                    <div id="examples-${i}"></div>
                </div>
            </div>`
            )
            note.examples.forEach((example) => {
                $(`#examples-${i}`).append(`<code>${example}</code><p></p>`)
            })
     })

})

$('#subject').append('<span></<span>', subject)
$('#title').append('<span></<span>', subject)

