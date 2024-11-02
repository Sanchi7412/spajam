var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("start");
  });
  
  module.exports = router;

  // public/start.js
document.getElementById('gameArea').addEventListener('click', () => {
  window.location.href = '/story'; // クリックでstoryページへ移動
});
