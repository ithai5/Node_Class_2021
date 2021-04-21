const router = require('express').Router()

const nodemailer = require('nodemailer')
const emailJson = require('../email.json')
const trasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailJson.user,
        pass: emailJson.pass
    }
})
router.get('/api/contact', (req, res) =>{
    res.send({message: "test"})
} )


router.post('/api/contact', (req, res) => {
    let testAccount = nodemailer.createTextAccount
    console.log(req.body)
    const mailOption = {
        from: req.body.email,
        to: emailJson.user,
        subject: req.body.name + "-  " + req.body.subject,
        text: req.body.message + "send by- " + req.body.email ,
    }
    trasporter.sendMail(mailOption, (error, info)=>{
        if(error){
            console.log(error)
            res.send({message: "something went wrong"})

        }
        else{
            console.log("email sent: ", info.response);
            res.send({message: "your message has been sent"})

        }
    })
})

module.exports = {
    router: router
}