const express = require("express")
const app = express()



// the file is run one time when the server is loaded

const dayOfTheWeek=["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"] //weekdays format length 7

const month = ["January", "February", "March", 
                "April", "May", "June",
                 "July", "August", "September",
                 "October", "November", "December"] //month names length 12

                 
//the get methods run when there is a call to the sever
const getDay = (date, daysFomat) => { 
    //gets a date object and an array of days fromat (length 7) 
    //and return the position in the array according to the date
    return dayOfTheWeek[date.getDay()]
}

const getTime = (date) => { //gets date obejct and return the time in fromat of "HH:MM:SS:MM"
    return`${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}:${date.getMilliseconds()}`
}

const getMonth = (date, monthFormat) => {
    //gets a date obejct and an array of months by name(string length 12) 
    //and return the position in the array 
    return monthFormat[date.getMonth()]
}


app.get("/switch/:show", (req, res) => {
    const date = new Date()
    switch(req.params.show) {
        case "day":
            res.send({day: getDay(date, dayOfTheWeek)})
            break;
        case "time":
            res.send({time: getTime(date)})
            break;
        case "month":
            res.send({month: getMonth(date, month)})
            break;
        default:
            res.send(date)
    }
})

// console.log(new Date().toLocaleDateString('dk-DK', {​​weekday: "long"}​​))
//print out the day of the week
app.get("/day/:name", (req, res) => {
    const date = new Date()
    res.send({dayOfTheWeek[date.getDay()]})
    // can also be with date.toLocaleDateString('dk-DK', {​​weekday: "long"}​​)
})

//print out the month
app.get("/month", (req, res) => {
    const date = new Date()
    res.send(month[date.getMonth()])
})

//print out the time
app.get("/time", (req, res) => {
    const date = new Date()
    res.send(`${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}:${date.getMilliseconds()}`)
})
app.get("/fancy/:show" , (req, res) => {
    const date =new Date()
    const toShow = {
        day: dayOfTheWeek[date.getDay()],
        time: `${date.getHours()}:${date.getMinutes()}: ${date.getSeconds()}:${date.getMilliseconds()}`,
        month: month[date.getMonth()]
    }
    res.send(toShow[req.params.show])
}
)

console.log();

app.get('/about', (req, res) =>{
    res.send({ about: "0.0.1" })
})

app.listen(8080)

// nodemon can be used during developemnt