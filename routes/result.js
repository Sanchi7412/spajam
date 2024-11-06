var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.score)

    let score = req.session.score;
    res.locals.score = score;
    console.log("わわわ")

    // if(req.session.point != undefined) {
    //     point = req.session.point;
    // } else {
    //     res.render("start")
    // }

    res.render("result", score);
});

module.exports = router;