const experss = require("express")
const app = experss()

app.use(experss.json());
const dog = require("anima")

//to send query string use ? to add new verable add &
app.get('/querystring', (req, res) => {
    res.send({value: req.query.value})
})
app.get('/pathvariable/:message/:title', (req, res) => {
console.log(res.path);
    res.send({
    message: req.params.message, 
    title: req.params.title
    })
})

app.post('whatever', (req, res) => {
    console.log(req.body);
})




app.listen(8080)