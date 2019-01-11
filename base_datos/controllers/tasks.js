const Task = require('../models').Task; //importar modelo sequelize 

module.exports = {
    index: function(req,res){
        Task.findAll().then((tasks)=>{
            res.render('tasks/index',{tasks: tasks}); //enviar vista index con metodo render
        })

    },
   create: function(req,res){
       Task.create({
           description: req.body.description
       }).then(result=>{
           res.json(result);
       }).catch(err=>{
           console.log(err);
           res.json(err);
       })
   },
   new: function(req,res){
       res.render('tasks/new');
   }
};