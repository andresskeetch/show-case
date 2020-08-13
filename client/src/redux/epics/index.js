import { combineEpics } from 'redux-observable';
import items from './items';

export default combineEpics(items);
