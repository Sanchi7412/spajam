var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        items: 30,
    };

    res.render("main", data);
});

router.post("/", function(req, res, next) {
    console.log(req.body)
    var score = req.body.score

    req.session.score = score;
    console.log(req.session.score)
    console.log("OK")

    res.redirect("/result")
})

module.exports = router;