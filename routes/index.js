var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.render('index', { title: 'handlebarsjs running on both server and client' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
