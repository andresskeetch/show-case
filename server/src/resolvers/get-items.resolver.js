const { param } = require('express-validator');
const { getItems } = require('../repository/API');
const converter = require('../converters/list-of-items');

const getItemsResolver = async (req, res) => {
  const { q } = req.query;
  const items = await getItems(q);

  return res.send(converter(items));
};

const validations = [param('q').exists()];

module.exports = { getItemsResolver, validations };
