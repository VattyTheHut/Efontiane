    require('dotenv').config()
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path')
    const app = express();
    const nodemailer = require('nodemailer');
    const xoauth2 = require('xoauth2');

    app.use(cors())
    app.use(express.static(path.join(__dirname, 'client/public')));
    app.use(express.static('assets'))    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    //console.log(JSON.stringify(req.body))

    let transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_SERVICE,
        // secure: process.env.NODEMAILER_SECURE,
        // port: process.env.NODEMAILER_PORT,
        auth:{
            
                type: 'OAuth2',
                user: process.env.NODEMAILER_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN
            
        },
        tis: {
            rejectUnauthorized: false,
        },
    });

    app.post('/converg', (req, res, next) => {
        console.log(JSON.stringify(req.body))
        let HelperOptions = {
             from: req.body.email,
             to: process.env.NODEMAILER_USER,
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
    
    app.post('/api', (req, res, next) => {
        console.log(process.env.GOOGLE_MAPS_API)
    });

    app.post('/consultation', (req, res, next) => {
       let HelperOptions = {
            from: req.body.email,
            to: process.env.NODEMAILER_USER,
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
            to: process.env.NODEMAILER_USER,
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
