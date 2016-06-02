import Immutable from 'immutable';
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS} from '../constants/reddit/index';
import {combineReducers} from 'redux';
function selectedsubreddit (state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state
  }
}
const initalState = Immutable.Map({
  isFetching: false,
  didInvalidate: false,
  itmes: Immutable.List()
});
function posts (state = initalState, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return state.set('didInvalidate',true);
    case REQUEST_POSTS:
      return state.merge({ didInvalidate: false, isFetching: true });
    case RECEIVE_POSTS:
      return Immutable.fromJS({
        isFetching: false,
        didInvalidate: false,
        itmes: action.posts,
        lastUpdated:action.receivedAt
      });
    default:
      return state
  }
}
function postsBySubreddit (state=Immutable.fromJS({}),action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Immutable.fromJS(Object.assign({},state,{
        [action.subreddit]: posts(state[ action.subreddit ], action)
      }));
    default:
      return state
  }
}
export default combineReducers({
  selectedsubreddit,
  postsBySubreddit
})
