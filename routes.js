// We're still in routes.js! Right below everything else.
const express = require('express');
const mysql= require('mysql');
const bodyParser= require('body-parser');
const md5= require('md5');
const nodemailer= require('nodemailer');
const moment= require('moment')
// Starting our app.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',     
    database : 'bd'
});

app.get('/all-users', (req, res)=>{
    console.log("begin get")
    connection.getConnection((err, connection)=>{
        connection.query('SELECT * FROM login', (error, results)=>{
            if(err) throw err;
            else{
                res.send(results)
            }
        })
    })
})


// Creating a GET route that returns data from the 'users' table.
app.get('/login/:email/:password', function (req, res) {

    // Connecting to the database.
    const email= req.params.email;
    const encryptedPassword= md5(req.params.password);
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(`SELECT login.id_employe, email, password, nom, prenom FROM login,employe where email='${email}' and password='${encryptedPassword}' and login.id_employe=employe.id_employe`, function (error, results) {
      if (error) throw error;
      else {
        res.send(results)
      }
    });
  });
});

app.post('/register', (req, res)=>{
    const id_employe= req.body.id_employe;
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

        var html= `
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                          <a href="" title="logo" target="_blank">
                           <img width="90" src="cid:logo1"/>
                          </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">Récupération du Compte</h1>
                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                        Vous recevez ceci parce que vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe de votre compte.
                                           Veuillez cliquer sur le lien ci-dessous et utiliser ce code pour terminer le processus : 
                                        </p>
                                        <a href=""
                                            style="background:green;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">${passwordCode}</a><br><br>
                                             <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                         Si vous ne l'avez pas demandé, veuillez ignorer ce mail et votre mot de passe restera inchangé.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;"><strong>©️ TTOBA Contact  2020 - 2021</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:80px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <!--/100% body table-->
</body>
`
        var mailOption = {
            from: ' Service Contact <service.center.app5000@gmail.com>',
            to: `${email}`,
            subject: 'Reset Your Password',
            /*attachments: [{
                filename: 'health.png',
                path: `${__dirname}/../img/health.png`,
                cid: 'logo1'
            }],*/
            html: html
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


app.post('/sync-fichelocalisation', (req, res)=>{
    const rows= req.body.rows._array;
    console.log('rows backend: ', rows)
    console.log('rows length: ', rows.length)
    connection.getConnection((err, connection)=>{
        for(var i=0; i<rows.length; i++){
            dateObs= moment(rows[i].DATE_OBSERV, 'DD/MM/YYYY').format('YYYY-MM-DD');
            connection.query(`INSERT INTO fichelocalisation VALUES (
                '${dateObs}',
                '${rows[i].OBSERV_NOM}',
                '${rows[i].FORET_NOM}',
                '${rows[i].TRIAGE}',
                '${rows[i].STRATE}',
                '${rows[i].ALTITUDE}',
                '${rows[i].ORIENTATION}',
                '${rows[i].NBESSENCE}',
                '${rows[i].PARCELLE_NO}',
                '${rows[i].CANTON}',
                '${rows[i].PLACETTE_NO}',
                ${rows[i].PENTE},
                ${rows[i].PROFONDEUR},
                ${rows[i].ROCHE_MERE},
                ${rows[i].AGE_MOY},
                '${rows[i].longitude}',
                '${rows[i].latitude}'
                )`,(err, results)=>{
                    if(err) throw err;
                    else {
                        console.log('nice')
                    }
                }
            )
        }
    })
})

app.post('/sync-fichedesc', (req, res)=>{
    const rows= req.body.rows._array;
    console.log('rows backend: ', rows)
    console.log('rows length: ', rows.length)
    connection.getConnection((err, connection)=>{
        for(var i=0; i< rows.length; i++){
            connection.query(`INSERT INTO fichedescription VALUES(
                '${rows[i].ESSENCE}',
                '${rows[i].STDEV_CODE}',
                ${rows[i].COUV_CODE},
                '${rows[i].FRUCTIFICATION}',
                '${rows[i].REGENERATION}',
                ${rows[i].SEMI_NB},
                ${rows[i].ETAT_SANITAIRE},
                ${rows[i].BOIS_GIS},
                ${rows[i].ECIMAGE},
                ${rows[i].H_MOY},
                ${rows[i].C_MOY},
                ${rows[i].SURFACE},
                ${rows[i].BRIN_NB},
                ${rows[i].SOUCHE_NB})
            `, (err, results)=>{
                if(err) throw err;
                else{
                    console.log('nice 2')
                }
            })
        }
    })
})

app.post('/sync-fichedendro', (req, res)=>{
    const rows= req.body.rows._array;
    console.log('back end rows: ', rows);
    console.log('rows length: ', rows.length);
    connection.getConnection((err,connection)=>{
        for(var i=0; i<rows.length; i++){
            connection.query(`INSERT INTO fichedendrometrique VALUES(
                '${rows[i].ESSENCE}',
                '${rows[i].DEMASCLE}',
                ${rows[i].CODE},
                '${rows[i].CLASSE}'
            )`, (err, rows)=>{
                if(err) throw err;
                else{
                    console.log('nice 3')
                }
            })
        }
    })
})

app.post('/sync-fichedominant', (req,res)=>{
    const rows= req.body.rows._array;
    console.log('back end rows: ', rows);
    console.log('rows length: ', rows.length);
    connection.getConnection((err, connection)=>{
        for(var i=0; i<rows.length; i++){
            connection.query(`INSERT INTO fihcedominant VALUES(
                '${rows[i].ESSENCE}',
                ${rows[i].ADOM_C},
                ${rows[i].ADOM_AGE},
                ${rows[i].ADOM_H}
            )`, (err, results)=>{
                if(err) throw err;
                else{
                    console.log('nice 4')
                }
            })
        }
    })
})

app.post('/sync-ficheechantillont', (req,res)=>{
    const rows= req.body.rows._array;
    console.log('back end rows: ', rows);
    console.log('rows length: ', rows.length);
    connection.getConnection((err, connection)=>{
        for(var i=0;i<rows.length; i++){
            connection.query(`INSERT INTO ficheechantillont VALUES (
                '${rows[i].ESSENCE}',
                '${rows[i].AECH_ETAGE}',
                ${rows[i].AECH_C1},
                ${rows[i].AECH_C2},
                ${rows[i].AECH_EP1},
                ${rows[i].AECH_EP2},
                ${rows[i].AECH_LCERNES},
                ${rows[i].AECH_HT},
                ${rows[i].AECH_HF},
                ${rows[i].AECH_HDEM}
            )`, (err, results)=>{
                if(err) throw err;
                else{
                    console.log('nice 5')
                }
            })
        }
    })
})

app.get('/date-search', (req,res)=>{
    connection.getConnection((err, connection)=>{
        connection.query(`SELECT * FROM fichelocalisation AS fl 
                            INNER JOIN fichedescription AS fdesc ON fdesc.DATE_OBSERV= fl.DATE_OBSERV 
                            INNER JOIN fihcedominant AS fd on fd.DATE_OBSERV= fl.DATE_OBSERV 
                            WHERE fl.DATE_OBSERV='2021-06-21' `, 
            (err, results)=>{
                if(err) throw err;
                else res.send(results)
            }
        )
    })
})

app.post('/delete-forms', (req,res)=>{
    connection.getConnection((err, connection)=>{
        connection.query(`DELETE fichelocalisation AS fl, fichedescription as fdesc, fihcedominant as fd
                            FROM fl
                            INNER JOIN fdesc ON  fdesc.DATE_OBSERV= fl.DATE_OBSERV 
                            INNER JOIN fd ON on fd.DATE_OBSERV= fl.DATE_OBSERV
                            WHERE fl.DATE_OBSERV='2021-06-21'`, (err, results)=>{
            if(err) throw err;
            else {
                console.log('nice')
            }
        })
    })
})

app.get('/localisation', (req,res)=>{
    connection.getConnection((err, connection)=>{
        connection.query('SELECT longitude, latitude from fichelocalisation',
            (err, rows)=>{
                if(err) throw err;
                else {
                    res.send(rows)
                }
            }
        )
    })
})
app.listen(3000, () => {
    console.log('Listening on port 3000');
});