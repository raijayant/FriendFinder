var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();

const port = process.env.port || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// set up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));

//ROUTES
//================================================
//set up routes by requiring from routing folder 
//send app object through require 
// reference : http://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, console.log(`Listening to ${port}`));