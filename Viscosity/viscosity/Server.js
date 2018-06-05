
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const path = require('path')
    let port = 5008;
    process.setMaxListeners(0);    
    const app = express();
    // const ejs = require('ejs');
    const paypal = require('paypal-rest-sdk');
    // const Paypal = require('./Server/Paypal_api.js')
    const Nodemailer = require('./Server/Nodemailer.js')
    const nodemailer = require('nodemailer');
  


    app.use(express.static(path.join(__dirname, 'client/public')));
    app.use(express.static('assets'))

     app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    // console.log(JSON.stringify(req.body))

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     secure: false,
    //     port: 25,
    //     auth:{
    //         user: " .v@ .com",
    //         pass: ' ..'
    //     },
    //     tis: {
    //         rejectUnauthorized: false,
    //     },
    // });
    
    // app.post('/postContact', (req, res, next) => {
    //     console.log(JSON.stringify(req.body)) 
    //     reqbody = {
    //         name: req.body.name,
    //         telephone: req.body.telephone,
    //         email: req.body.email,
    //         phone: req.body.phone,
    //         messages: req.body.message
    //     }
    //    let HelperOptions = {
    //         from: reqbody.email,
    //         to: "corlonprime.v@gmail.com",
    //         subject: "viscodity Engine Contact",
    //         text: " bj"
    //     }
    
    //     transporter.sendMail(HelperOptions, (error, info) => {
    //         if(error){
    //             console.log(error)
    //         }
    //         console.log('the message was sent!');
    //         console.log(info);  
    //     })
    // });

    



    // paypal.configure({
    //     'mode': 'sandbox', //sandbox or live
    //     'client_id': '',
    //     'client_secret': ''
    // });
    

    
    // app.post('/pay', (req, res) => {
    //     const create_payment_json = {
    //     "intent": "sale",
    //     "payer": {
    //         "payment_method": "paypal"
    //     },
    //     "redirect_urls": {
    //         "return_url": "http://localhost:3000/success",
    //         "cancel_url": "http://localhost:3000/cancel"
    //     },
    //     "transactions": [{
    //         "item_list": {
    //             "items": [{
    //                 "name": "Red Sox Hat",
    //                 "sku": "001",
    //                 "price": "25.00",
    //                 "currency": "USD",
    //                 "quantity": 1
    //             }]
    //         },
    //         "amount": {
    //             "currency": "USD",
    //             "total": "25.00"
    //         },
    //         "description": "Hat for the best team ever"
    //     }]
    // };
    
    // paypal.payment.create(create_payment_json, (error, payment) =>{
    //     if (error) {
    //         throw error;
    //     } else {
    //         // console.log(payment)
    //         for(let i = 0;i < payment.links.length;i++){
    //         if(payment.links[i].rel === 'approval_url'){
    //             res.redirect(payment.links[i].href);
    //         }
    //         }
    //     }
    // });
    
    // });
    
    // app.get('/success', (req, res) => {
    //     const payerId = req.query.PayerID;
    //     const paymentId = req.query.paymentId;
    //     console.log("payerId = " + payerId)
    
    //     const execute_payment_json = {
    //     "payer_id": payerId,
    //     "transactions": [{
    //         "amount": {
    //             "currency": "USD",
    //             "total": "25.00"
    //         }
    //     }]
    //     };
    
    //     paypal.payment.execute(paymentId, execute_payment_json, (error, payment) =>{
    //     if (error) {
    //         console.log(error.response);
    //         throw error;
    //     } else {
    //         console.log(JSON.stringify(payment));
    //         res.send('Success');
    //     }
    // });
    // });
    
    // app.get('/cancel', (req, res) => res.send('Cancelled'));


 
    app.post('/send', (req, res) => {
        Nodemailer.mailtoclient();
    });



    app.listen(port, () => {
        console.log("resonating on port " + port)
    })
