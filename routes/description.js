var express = require('express');
var router = express.Router();

/* GET home page. 石井先生のパクリ*/
router.get('/', function(req, res, next) {
   
    res.render("description");
});

module.exports = router;
