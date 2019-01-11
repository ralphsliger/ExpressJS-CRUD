const Task = require('../models').Task; //importar modelo sequelize 

module.exports = {
    index: function(req,res){
        Task.findAll().then((tasks)=>{
            res.json(tasks);
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