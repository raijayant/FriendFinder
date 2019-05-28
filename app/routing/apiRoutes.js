const express = require('express');
const routerApi = express.Router();
const friendList = require('../data/friends.js');

routerApi.get('/api/friends', function (req, res) {

    res.json(friendList);
});

routerApi.post('/api/friends', function (req, res) {

    res.json({
        message: "POST"

    });
});

module.exports = routerApi;