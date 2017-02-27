var bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken');
var User = require('../models/user');

module.exports.userCreate = function(req, res, next){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err, createdObject){
    if(err){
      return res.status(500).json({
        responseTitle: "An error occured",
        responseData: err
      });
    }
    res.status(201).json({
      responseTitle: "User created!",
      responseData: createdObject
    });
  });
}
module.exports.userSignIn = function(req, res, next){
  User.findOne({username: req.body.username}, function(err, fetchedObject){
    if(err){
      return res.status(500).json({
        responseTitle: 'An error occured',
        responseData: err
      });
    }
    if(!fetchedObject){
      return res.status(401).json({
        responseTitle: 'Login failed',
        responseData: 'Invalid Login Credentials'
      });
    }
    if(!bcrypt.compareSync(req.body.password, fetchedObject.password)){
      return res.status(401).json({
        responseTitle: 'Login failed',
        responseData: 'Invalid Login Credentials'
      });
    }
    var token = jwt.sign({user: fetchedObject}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      responseTitle: 'Successfully Logged In',
      token: token,
      username: fetchedObject.username
    });
  });
}
module.exports.userGetOne = function(req, res, next){
  var user = req.params.username;
  User
    .createIndex({'username': 1})
    .findOne({"username": user}, {'username': 1, '_id': 0})
    .exec(function(err, object){
      if(err){
        return res.status(500).json({
          responseTitle: 'An error occured',
          responseData: err
        });
      }
      if(!object){
        return res.status(404).json({
          responseTitle: 'User not found',
          responseData: user
        });
      }
      res.status(200).json({
        responseTitle: 'Username Fetched',
        responseData: object
      })
    })

}
