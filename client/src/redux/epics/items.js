import { flatMap, catchError } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs-compat';
import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';
import ItemsActions, { ItemsTypes } from '../reducers/items.reducer';
import axios from 'axios';

export const getItems = (action$) =>
  action$.pipe(
    ofType(ItemsTypes.GET_ITEMS),
    flatMap((action) => {
      return Observable.from(
        axios.get(`${process.env.REACT_APP_API}/items?q=${action.query}`)
      ).pipe(
        flatMap((response) => {
          return Observable.concat(
            Observable.of(ItemsActions.setItems(response.data)),
            Observable.of(push(`/items?search=${action.query}`))
          );
        }),
        catchError((e) => {
          Observable.of(push('/error'));
        })
      );
    })
  );

export const getItemById = (action$) =>
  action$.pipe(
    ofType(ItemsTypes.GET_ITEM_BY_ID),
    flatMap((action) => {
      return Observable.from(
        axios.get(`${process.env.REACT_APP_API}/items/${action.id}`)
      ).pipe(
        flatMap((response) => {
          return Observable.concat(
            Observable.of(ItemsActions.setItemSelected(response.data.item))
          );
        }),
        catchError((e) => {
          Observable.of(push('/error'));
        })
      );
    })
  );

export default combineEpics(getItems, getItemById);
