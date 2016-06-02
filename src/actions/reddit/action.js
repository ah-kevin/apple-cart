import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS,FAIL_DATA} from '../../constants/reddit/index';
import fetch from 'isomorphic-fetch'
export function selectSubreddit (subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

//刷新
export function invalidatesubreddit (subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
export function requestPosts (subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
export function receivePosts (subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child=>child.data),
    receivedAt: Date.now()
  }
}
export function failData (err) {
  return{
    type:FAIL_DATA,
    data:err
  }

}

//第一个thunk aciton
//当 action creator 返回函数时，这个函数会被 Redux Thunk middleware 执行。这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求。这个函数还可以 dispatch action，就像 dispatch 前面定义的同步 action 一样
export function fetchPosts (subreddit) {
  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(response=>response.json())
      .then(json=>
        dispatch(receivePosts(subreddit,json))
      )
      .catch(err=>dispatch(failData(err)))
  }
}

function shouldFetchPosts (state,subreddit) {
  const posts=state.postsBySubreddit(subreddit);
  if(!posts){
    return true
  }else if(posts.isFetching){
    return false
  }else{
    return posts.didInvalidate
  }
}
export function fetchPostsIfNeeded (subreddit) {
  return (dispatch,getState)=>{
    if(shouldFetchPosts(getState(),subreddit)){
      return dispatch(fetchPosts(subreddit))
    }else{
      // 告诉调用代码不需要再等待。
      return Promise.resolve();
    }
  }

}
