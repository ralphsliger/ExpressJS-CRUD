const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

//const tasks = require('./controllers/tasks'); //importar controlador tasks

app.use(bodyParser.urlencoded({extended: true}));

//const sequelize = new Sequelize('proyecto-backend',null,null,{ // iniciar conexion  a bd
  //dialect: 'sqlite',
  // storage: './proyecto-backend'
// });
//let db = new sqlite3.Database('proyecto-backend');

app.set('view engine','pug'); //vistas

//app.get('/tasks',tasks.home); 

app.post('/pendientes', function(req,res){
  //db.run(`INSERT INTO tasks(description) VALUES(?)`,req.body.description);
  res.send('Insercion final')
});


app.listen(3000);
