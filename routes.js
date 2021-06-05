// We're still in routes.js! Right below everything else.
const express = require('express');
const mysql= require('mysql');
const bodyParser= require('body-parser');
const md5= require('md5');
const nodemailer= require('nodemailer');
// Starting our app.
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root',     
    password : 'root',     
    database : 'stage'   
});

// Creating a GET route that returns data from the 'users' table.
app.get('/login/:email/:password', function (req, res) {
    // Connecting to the database.
    const email= req.params.email;
    const encryptedPassword= md5(req.params.password);
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(`SELECT * FROM login where email='${email}' and password='${encryptedPassword}'`, function (error, results) {
      if (error) throw error;
      else {
        res.send(results)
      }
    });
  });
});

app.post('/register', (req, res)=>{
    const id_employe= req.body.id_employe
    const email= req.body.email;
    const password= req.body.password;
    connection.getConnection((err,connection)=>{
        connection.query(`INSERT INTO login VALUES ('${id_employe}','${email}','${password}')`, (error, results)=>{
            if(error) throw error;
            else res.send(results)
        })
    })
})

app.post('/reset-password', (req,res)=>{
    const email= req.body.email;
    connection.query(`SELECT * FROM login where email='${email}'`, function (error, results) {
    if (error) throw error;
    else if(results.length===0){
        res.status(400)
    }else{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'service.center.app5000@gmail.com',
                pass: 'Swatlogo123'
            }
        })
        var mailOption = {
            from: ' Service Contact <service.center.app5000@gmail.com>',
            to: `${email}`,
            subject: 'Reset Your Password',
            /*attachments: [{
                filename: 'health.png',
                path: `${__dirname}/../img/health.png`,
                cid: 'logo1'
            }],*/
            html: '<p>hello</p>'
        }
        transporter.sendMail(mailOption, (err, data) => {
            if (err) throw err;
            else {
                res.send(data)
            }
        });
      }
    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});