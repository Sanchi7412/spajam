var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        items: 30,
    };

    res.render("main", data);
});

module.exports = router;