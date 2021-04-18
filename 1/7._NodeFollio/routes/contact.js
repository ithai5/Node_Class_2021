const router = require('express').Router()

router.get('/api/contact', (req, res) =>{
    res.send({message: "test"})
} )

router.post('/api/contact', (req, res) => {
    console.log(req.body)
    res.send({message: "your message has been sent"})
})

module.exports = {
    router: router
}