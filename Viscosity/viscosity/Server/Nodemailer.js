// const nodemailer = require('nodemailer');


// module.exports =  {


//     reqbody: {
//         name: req.body.name,
//         telephone: req.body.telephone,
//         Email: req.body.email,
//         Phone: req.body.phone,
//         messages: req.body.message
//     },

//     mailtoclient: () =>{

//         let output = "<p>You have a new contact request</p>" + 
//                         "<h3>Contact Details</h3>" +
//                         "<ul>" +  
//                            "<li>Name: " + reqbody.name + "</li>" +
//                             "<li>telephone: " + reqbody.telephone + "</li>" +
//                             "<li>Email: " + reqbody.Email + "</li>" +
//                             "<li>Phone: " + reqbody.Phone + "</li>" +
//                         "</ul>" +
//                         "<h3>Message</h3>" +
//                     "<p>" + reqbody.messages + "</p>"
        

//                     console.log("in the mailclient")
      
//         // create reusable transporter object using the default SMTP transport
//         let transporter = nodemailer.createTransport({
//           host: '127.0.0.1',
//           port: 587,
//           secure: false, // true for 465, false for other ports
//           auth: {
//               user: 'Corlonprime.v@gmail.com', // generated ethereal user
//               pass: 'Zelda64..'  // generated ethereal password
//           },
//           tls:{
//             rejectUnauthorized:false
//           }
//         });


      
//         // setup email data with unicode symbols
//         let mailOptions = {
//             from: output,
//             to: 'heketavnolroc@gmail.com', // list of receivers
//             subject: 'Node Contact Request', // Subject line
//             text: 'Hello world?', // plain text body
//             html: output // html body
//         };

//         console.log("asdad")
      
//         // send mail with defined transport object
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);   
//             console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
//             res.render('contact', {msg:'Email has been sent'});
//         });
//     }
// }