var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var sourceDir = path.join(__dirname, '../../examples/components/');
var locations = ['北京市', '上海市', '南京市', '广州市', '合肥市', '南昌市', '杭州市', '合肥市', '南昌市', '杭州市'];
var names = ['Tom', 'Jack', 'Lili', 'Jean', 'Lucy', 'Nancy', 'Kim', 'Aaron', 'Abbott', 'Miya'];

/* GET home page. */
router.get('/file', function(req, res, next) {
  // res.send(req.path)
  var filename = req.path.split('/api/file/')[1];
  console.log(req.query.name)
  var targetFile = sourceDir + req.query.name;
  console.log(targetFile)
  readTargetFile(targetFile, function(text){
    res.send(text);
  });
  // res.send('index');
});

router.get('/users', function(req, res, next) {

  var kw = req.query.keyword;
  var users = '0123456789'.split('').map(function(item, k){
    return {
      id: k,
      name: kw + k,
      en: names[k],
      age: (Math.random()*100).toFixed(0),
      location: locations[k]
    };
  })
  res.send(users);
});

router.get('/users/:user', function(req, res, next) {
  var userName = req.params.user;
  var user = {
      id: 1,
      name: userName,
      en: names[1],
      age: (Math.random()*100).toFixed(0),
      location: locations[1]
    };
  res.send(user);
});


function readTargetFile(targetFile, callback){
  fs.exists(targetFile, function(exists) {
    if(exists){
      var file = fs.readFileSync(targetFile, 'utf8', function(err, data){
        if(err) throw new Error(err);
      });
      callback(file)
    } else {
      callback('Not Found!')
    }
  });

}

module.exports = router;
