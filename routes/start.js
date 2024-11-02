var express = require('express');
var router = express.Router();

app.use(express.static('public'));

router.get('/', function(req, res, next) {
    res.render("start");
  });
  
  module.exports = router;
