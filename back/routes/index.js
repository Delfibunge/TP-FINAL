var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin/login') /*cuando levanta node redirige automáticamente a /admin/login*/
});

module.exports = router;
