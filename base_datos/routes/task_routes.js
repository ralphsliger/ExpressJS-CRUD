const express = require('express');

let router = express.Router();

router.route('/tasks').get(function(req,res){
    res.send('probando');
    
}).post(function(req,res){

})

module.exports= router; //exportar rutas 