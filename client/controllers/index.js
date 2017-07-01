var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/festivals', require('./festivals.js'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

module.exports = router;
