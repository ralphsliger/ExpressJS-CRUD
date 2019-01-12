const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const MethodOverride = require('method-override');
const app = express();

const tasksRoutes = require('./routes/task_routes'); //importar grupo rutas 'task routes subrutas'

app.use(bodyParser.urlencoded({extended: true}));

app.use(MethodOverride('_method'));

app.set('view engine','pug'); //vistas

app.use(tasksRoutes);


app.listen(3000);
