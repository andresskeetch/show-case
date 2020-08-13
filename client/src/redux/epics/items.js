import { flatMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs-compat';
import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';
import ItemsActions, { ItemsTypes } from '../reducers/items.reducer';
import axios from 'axios';

export default (action$) =>
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
