import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../../redux/reducers';
import epics from '../../redux/epics';

export const history = createBrowserHistory();

export default function configureStore() {
  const initialState = {};
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history), epicMiddleware))
  );

  epicMiddleware.run(epics);

  return store;
}
