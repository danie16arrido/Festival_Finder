var express = require('express');
var router = express.Router();
var path = require('path');

//hand api calls to festivals.js
router.use('/api/festivals', require('./festivals.js'));

//landing page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

module.exports = router;
