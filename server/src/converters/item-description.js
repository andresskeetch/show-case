const getDecimal = (price) => {
  if (price.toString().includes('.')) return price.toString().split('.')[1];
  return '00';
};

module.exports = (item, description) => {
  return {
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price.toFixed(0),
        decimals: getDecimal(item.price),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
    author: {
      name: '',
      lastname: '',
    },
  };
};
