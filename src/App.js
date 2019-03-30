import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import spinner from './assets/Spinner.svg';

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center"><img src={spinner} alt='spinner' /></div>;

// Container
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

function App() {
  console.log(DefaultLayout);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="home" component={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
