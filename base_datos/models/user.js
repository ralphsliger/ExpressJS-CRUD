'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL //para no guardar en la tabla 
  }, {});

  User.login = function(email,password){
    //buscar al usuario
   return User.findOne({
      where: {
        email: email
      }
    }).then(user=>{
      // Compara texto plano con el texto incriptado 
      if(!user) return null;
     return user.authenticatePassword(password).then(valid=> valid ? user : null);
    });
  };

  User.prototype.authenticatePassword = function(password){
     return new Promise((res,rej)=>{
       bcrypt.compare(password,this.password_hash,function(err,valid){
         if(err) return rej(err);
         res(valid);
       })
     })

}

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(function(user,options){

    return new Promise((res,rej)=>{

     if(user.password){
        bcrypt.hash(password, 10, function(error,hash){
          user.password_hash = hash;
          res();
      })  
    };

      });


  });
  return User;
};