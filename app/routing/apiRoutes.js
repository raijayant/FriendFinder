const express = require('express');
const routerApi = express.Router();

routerApi.get('/api/friends', function (req, res) {

    res.json({
        name: "Jayant Rai"

    });
});

routerApi.post('/api/friends', function (req, res) {

    res.json({
        message: "POST"

    });
});

module.exports = routerApi;