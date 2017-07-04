const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test'){
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());

routes(app);

// order in which middleware is registered makes a difference in Express
// in this app: bodyParser is first, then routes, then custom middleware
// next must be manually called in Express to go onto the next middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
