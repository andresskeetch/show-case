const { param } = require('express-validator');
const { getItem } = require('../repository/API');
const converter = require('../converters/item-description');

const getItemResolver = async (req, res) => {
  const { id } = req.params;
  const [item, description] = await getItem(id);

  return res.send(converter(item.data, description.data));
};

const validations = [param('id').exists().isString()];

module.exports = { getItemResolver, validations };
