import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createRoutes from './routes/routes';

const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});
ReactDOM.render(
  <Provider store={store} children="">
            {createRoutes(history)}
  </Provider>
  , document.getElementById('app'));
