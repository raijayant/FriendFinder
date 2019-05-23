const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('This is a server.js file');
});

router.get('/survey', function (req, res) {
    res.send('Display Survey to HTML page');
});

module.exports = router;