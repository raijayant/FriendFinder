const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 8080;






// set up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));




const router = require('./app/routing/htmlRoutes');
const routerApi = require('./app/routing/apiRoutes');



app.listen(port, console.log(`Listening to ${port}`));