const axios = require('axios');

const API_ITEM = App.api.items;
const API_ALL_ITEMS = App.api.items;

const getItems = async (query) => {
  try {
    const { data } = await axios.get(`${API_ALL_ITEMS}${query}`);

    return data;
  } catch {
    throw new Error();
  }
};

const getItem = async (id) => {
  try {
    const response = await axios.all([
      axios.get(`${API_ITEM}${id}`),
      axios.get(`${API_ITEM}${id}/description`),
    ]);

    return response;
  } catch {
    throw new Error();
  }
};

module.exports = { getItems, getItem };
