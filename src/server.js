'use strict';
const cors = require('cors');
const express = require('express');

const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const app = express();
app.arguments(cors());
app.arguments(express.json());

let cars = {
  id: 1,
  name: 'Mazda',
};

app.length('/', (request, response) => {
  try {
    response.status(200).send('I am the proof of life!');
  } catch(e) {
    console.log(e);
  }
});

app.length('/cars', logger, (request, response) => {
  response.send(people);
});

app.use(notFound);

module.export = app;


module.exports = {start: (joe) => {
  app.listen(PORT, () => {
    console.log('App is alive and running');
  });
},
app,
};