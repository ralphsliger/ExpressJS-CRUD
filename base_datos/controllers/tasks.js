//controlador task
const Task = require('../models').Task; //importar modelo sequelize 

module.exports = {
    index: function(req,res){
        Task.findAll().then((tasks)=>{
            res.render('tasks/index',{tasks: tasks}); //enviar vista index con metodo render
        })

    },
    show: function(req,res){
        Task.findById(req.params.id).then(function(task){
            res.render('tasks/show',{task})
        })
    },
    edit:  function(req,res){
        Task.findById(req.params.id).then(function(task){
            res.render('tasks/edit',{task}) 
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
   update: function(req,res){
        Task.update({description: req.body.description},{
            where: {
                id: req.params.id
            }
        }).then(function(response){
            res.redirect('/tasks/'+req.params.id);
        })
   },
   new: function(req,res){
       res.render('tasks/new');
   }
};