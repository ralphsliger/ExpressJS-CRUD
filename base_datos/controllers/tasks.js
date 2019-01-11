const Task = require('../models').Task; //importar modelo sequelize 

module.exports = {
    home: function(req,res){
        Task.findAll().then(function(tasks){
            res.render('tasks/index',{tasks: tasks}); //ubicacion de la vista y objeto json con los datos
        });
    }
};