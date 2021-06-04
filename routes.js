// We're still in routes.js! Right below everything else.
const express = require('express');
const mysql= require('mysql');
const bodyParser= require('body-parser');
const md5= require('md5')
// Starting our app.
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createPool({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : 'root',     // Your database's password.
    database : 'stage'   // Your database's name.
});

// Creating a GET route that returns data from the 'users' table.
app.get('/login/:email/:password', function (req, res) {
    // Connecting to the database.
    const email= req.params.email;
    const encryptedPassword= md5(req.params.password);
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(`SELECT * FROM login where email='${email}' and password='${encryptedPassword}'`, function (error, results) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      else {
        console.log('results: ', results)
        res.send(results)
      }
    });
  });
});

app.post('/register', (req, res)=>{
    const email= req.body.email;
    const password= req.body.password;
    connection.getConnection((err,connection)=>{
        connection.query(`INSERT INTO login VALUES ('${email}','${password}')`, (error, results)=>{
            if(error) throw error;
            else res.send(results)
        })
    })
})

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});