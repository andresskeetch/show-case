import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as items } from './items.reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    search: items,
  });
