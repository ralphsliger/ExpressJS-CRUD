const express = require('express');
let TasksController = require('../controllers/tasks'); //importar controlador
let router = express.Router();

router.route('/tasks').get(function(req,res){
    res.send('probando, probando');
    
}).post(TasksController.create);


router.get('/tasks/new',TasksController.new); //Ruta formulario "vista new"


module.exports= router; //exportar rutas 