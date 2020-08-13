import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getItems: ['query'],
  setItems: ['payload'],
});

export const ItemsTypes = Types;
export default Creators;

const INITIAL_STATE = {
  items: [],
  categories: [],
};

const setItems = (state, { payload }) => {
  return Object.assign({}, state, {
    ...payload,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ITEMS]: setItems,
});
