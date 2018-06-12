    require('dotenv').config()

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path')
    const app = express();
    const nodemailer = require('nodemailer');

    app.use(cors())
    app.use(express.static(path.join(__dirname, 'client/public')));
    app.use(express.static('assets'))    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    //console.log(JSON.stringify(req.body))

    let transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        secure: process.env.NODEMAILER_SECURE,
        port: process.env.NODEMAILER_PORT,
        auth:{
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PWS
        },
        tis: {
            rejectUnauthorized: false,
        },
    });
    
    app.post('/send', (req, res, next) => {
        
       let HelperOptions = {
            from: req.body.email,
            to: "corlonprime.v@gmail.com",
            subject: "Efontaine emaillist appendage",
            text: `email: ${req.body.name}, 
                   phone: ${req.body.email}, 
                   name: ${req.body.name}`
        }
    
        transporter.sendMail(HelperOptions, (error, info) => {
            if(error){
                console.log(error)
            }
            console.log('the message was sent!');
            console.log(info);  
        })
    });

    app.post('/consultation', (req, res, next) => {
       let HelperOptions = {
            from: req.body.email,
            to: "corlonprime.v@gmail.com",
            subject: "Efontiane consultation",
            text: ` name: ${req.body.name},
                    email: ${req.body.email}, 
                    subject: ${req.body.subject} \n\n
                    message: ${req.body.message}`
        }
    
        transporter.sendMail(HelperOptions, (error, info) => {
            if(error){
                console.log(error)
            }
            console.log('the message was sent!');
            console.log(info);  
        })
    });

    app.post('/contact', (req) => {
       let HelperOptions = {
            from: req.body.email,
            to: "corlonprime.v@gmail.com",
            subject: "Efontiane consultation",
            text: ` name: ${req.body.name},
                    email: ${req.body.email}, 
                    company: ${req.body.company} 
                    phone: ${req.body.phone},
                    topic: ${req.body.value} \n\n

                    -----------message-----------

                    ${req.body.message} `
        }
    
        transporter.sendMail(HelperOptions, (error, info) => {
            if(error){
                console.log(error)
            }
            console.log('the message was sent!');
            console.log(info);  
        })
    });



    app.listen(process.env.PORT, () => {
        console.log("resonating on port " + process.env.PORT)
        
        
    })
