import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Route } from 'react-router';

import GlobalNav from "./Common/GlobalNav";
import Top from './Top';
import About from './About';
import BooksApp from "./BooksApp";

const App = () => {
  return(
      <React.Fragment>
        <GlobalNav />
        <Switch>
          {/*完全一致のため、exactを付与*/}
          <Route path="/" exact component={Top} />
          <Route path="/about" component={About} />
        </Switch>
        <BooksApp />
      </React.Fragment>
  )
}

if (document.getElementById('app')) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('app'));
}
