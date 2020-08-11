const getItems = require('./get-items.resolver');
const getItem = require('./get-item.resolver');

module.exports = [
  /*
   * Get items
   *
   * @name {GET} /items
   * @querystring {String} [name] item name
   */
  ['get', '/items', getItems.getItemsResolver, getItems.validations],
  /*
   * Get items by id
   *
   * @name {GET} /items/id
   * @querystring {Number} [id] item name
   */
  ['get', '/items/:id', getItem.getItemResolver, getItem.validations],
];
