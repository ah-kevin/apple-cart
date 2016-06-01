/**
 * Created by dg_lennon on 16/5/31.
 */
import {combineReducers} from 'redux-immutable';
import {LOCATION_CHANGE} from 'react-router-redux';
import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});
function routerReducer(state = initialState, action){
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    });
  }

  return state;
}

import items from './items'
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  routing:routerReducer,
  items
});

export default rootReducer
