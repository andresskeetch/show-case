module.exports = (item, description) => {
  return {
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2,
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
