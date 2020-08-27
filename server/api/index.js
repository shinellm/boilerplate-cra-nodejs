var express = require('express');
var router = express.Router();

/* Test api routing */
router.get('/', function(req, res, next) {
  res.send('Welcome to your express server! Start creating and editing your api routes in the server/api folder.');
});

module.exports = router;
