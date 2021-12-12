import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './app/app';
import About from './app/pages/Profile';
import Bookmarks from './app/pages/Bookmarks';
import Recipes from './app/pages/Recipes';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Switch>
        <Route exact path="/">
          <Recipes />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
