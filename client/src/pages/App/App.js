import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../../lib/loaders/redux';
import Home from '../Home/home';
import Header from '../../components/Header/Header';
import './Styles.scss';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <div className='main__container'>
          <Switch>
            <Route path='/items' component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
