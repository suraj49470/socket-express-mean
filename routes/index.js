var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var user = {"name":"suraj singh","age":23};
  res.io.emit("socketToMe", user);
  res.render('index', { title: 'Express' });
});

module.exports = router;
