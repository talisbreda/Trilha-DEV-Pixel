import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './Components/Menu';
import './index.css';
import { ABC } from './templates/ABC';
import { App } from './templates/App';
import { Page404 } from './templates/Page404';

// ? significa que o parâmetro é opcional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path='/abc/:slug/:id' component={ABC} />
      <Route path='/abc/:slug' component={ABC} />
      <Route path='/' component={App} exact />
      <Route path='*' component={Page404} />
      {/* <App /> */}
    </Switch>
  </BrowserRouter>,
);
