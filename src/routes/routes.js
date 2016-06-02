import React from 'react';
import {Route, Router,Redirect,IndexRoute} from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import AppleBasket from '../containers/AppleBasket'
export default function routes(history){
  return (
    <Router history={history}>
      <Route path="/" component={AppleBasket}/>
      <Route path="/app" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="/404" component={NotFound}/>
        <Redirect from="*" to='/404'/>
      </Route>
    </Router>
  )
}
