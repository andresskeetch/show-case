const defaultData = require('./default');
global.App = defaultData;

const express = require('express');
const routes = require('./resolvers/routes');

const app = express();

routes.forEach(([method, path, callback, validations]) => {
  app[method](path, validations, callback);
});

app.listen(App.port, () => {
  console.log('Happy hacking');

  console.log(App.url);
});
