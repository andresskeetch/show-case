import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/home';
import Header from '../../components/Header/Header';
import './Styles.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main__container'>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
