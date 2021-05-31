// We're still in routes.js! Right below everything else.
const express = require('express');
const mysql= require('mysql');
// Starting our app.
const app = express();

const connection = mysql.createPool({
    host     : 'localhost', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : 'root',        // Your database's password.
    database : 'stage'   // Your database's name.
});

// Creating a GET route that returns data from the 'users' table.
app.get('/login', function (req, res) {
    // Connecting to the database.
    const email= req.params.email;
    const password= req.params.password;
    console.log("email: ",email);
    console.log("password: ", password);
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(`SELECT * FROM login where email='kassabyasser15@gmail.com' and password='admin00'`, function (error, results) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      else{
        console.log('results: ', results)
        res.send(results)
      }
    });
  });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});