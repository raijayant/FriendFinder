const express = require('express');
const path = require('path');

const app = express();

const router = require('./app/routing/htmlRoutes');
const routerApi = require('./app/routing/apiRoutes');



//to mount the router to the app
app.use('/survey', router);
app.use(routerApi);
app.use(express.static('public'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening to ${PORT}`));