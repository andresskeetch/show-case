require('dotenv').config({ path: __dirname + '/../.env' });

module.exports = {
  url: process.env.URL,
  port: process.env.PORT,
  api: {
    items: process.env.API_PATH_ITEMS,
  },
};
