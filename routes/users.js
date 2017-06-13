var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.io.emit("socketToMe", "users");
  res.render('users', { title: 'Express' });
});

module.exports = router;
