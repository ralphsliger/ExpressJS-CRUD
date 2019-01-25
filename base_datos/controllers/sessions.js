const User = require('../models').User;


module.exports = {
    new: function(req,res){
        //desplegar formulario inicio sesion
        res.render('sessions/new')
    },
    create: function(req,res){
        User.login(req.body.email, req.body.password).then(user => res.json(user))
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    }
};