
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path')
    let port = 3001;
    const app = express();
    const nodemailer = require('nodemailer');


    app.use(cors())
    app.use(express.static(path.join(__dirname, 'client/public')));
    app.use(express.static('assets'))    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    //console.log(JSON.stringify(req.body))

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth:{
            user: "corlonprime.v@gmail.com",
            pass: "Zelda64sixfour"
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



    app.listen(port || process.env.PORT, () => {
        console.log("resonating on port " + port)
        
    })
