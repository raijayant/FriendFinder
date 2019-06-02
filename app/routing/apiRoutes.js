
var friendList = require('../data/friends.js');

var bodyParser = require('body-parser');
var path = require('path');


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {

    res.json(friendList);
});




app.post('/api/friends', function (req, res) {
    
    //to store sum of users score
    var newUserTotalScore = sum(req.body.scores);
    

    var friendTotal = 0;
    
})
};
