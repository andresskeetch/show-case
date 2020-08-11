module.exports = (response) => {
  const categories = [];
  const items = response.results.map((item) => {
    categories.push(item.category_id);
    return {
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
    };
  });

  return {
    categories: [...new Set(categories)],
    items,
    author: {
      name: '',
      lastname: '',
    },
  };
};
