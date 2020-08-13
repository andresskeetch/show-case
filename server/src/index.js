const defaultData = require('./default');
global.App = defaultData;

const express = require('express');
const cors = require('cors');
const routes = require('./resolvers/routes');

const app = express();

app.use(cors());

routes.forEach(([method, path, callback, validations]) => {
  app[method](path, validations, callback);
});

app.listen(App.port, () => {
  console.log('Happy hacking');

  console.log(App.url);
});
