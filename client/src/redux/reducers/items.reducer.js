import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getItems: ['query'],
  setItems: ['payload'],
  getItemById: ['id'],
  setItemSelected: ['payload'],
});

export const ItemsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  items: [],
  categories: [],
  itemSelected: {
    price: {},
  },
};

const setItems = (state, { payload }) => {
  return Object.assign({}, state, {
    ...payload,
  });
};

const setItemSelected = (state, { payload }) => {
  return Object.assign({}, state, {
    itemSelected: payload,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ITEMS]: setItems,
  [Types.SET_ITEM_SELECTED]: setItemSelected,
});
